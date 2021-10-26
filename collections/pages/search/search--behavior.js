---
layout: compress
sitemap: false
---

/**
 * @file
 * Scripts necessary for search page operation.
 */

'use strict';

/* We'll fetch this and instantiate from the fetch promise, but keep this data global. */
let searchIndex = [];
/* Should be 0 instead of Date.now() since we trigger right after fetching. If the
 * payload is cached, we might miss the 150ms debounce. */
let searchDebounce = 0;

const qInputs = document.querySelectorAll('input[name="q"]');
const resultsElements = document.querySelectorAll('.search--results-container');
const urlParams = new URLSearchParams(window.location.search);

/**
 * Take a string query and narrow it (adding metadata) to matching results from
 * the global index.
 *
 * @param searchQuery
 * @returns {[]}
 */
let filterResults = (searchQuery) => {
  let results = [];

  /* A null string should show the no-results state. */
  if (!searchQuery.length) {
    return results;
  }

  /* The context on either side of the query in an excerpt. */
  const excerptPad = 20 - searchQuery.length;
  const qRegex = new RegExp(searchQuery, 'gi');

  Array.prototype.forEach.call(searchIndex, (result) => {
    let score = 0, matchIndex;
    result.excerpt = "(Query matches title)";

    /* Boost title matches by 2 */
    score += (result.title.match(qRegex)) ? (2 * result.title.match(qRegex).length) : 0;

    if (result.content.match(qRegex)) {
      /* Add to relevance score for every match. */
      score += result.content.match(qRegex).length;

      /* Create an excerpt with context and the search phrase in bold */
      matchIndex = result.content.search(qRegex);
      result.excerpt = "..."
        + result.content.substr((matchIndex - excerptPad), excerptPad)
        +  "<strong>" + searchQuery + "</strong>"
        + result.content.substr((matchIndex + searchQuery.length), excerptPad)
        + "...";
    }

    /* Score is zero (falsy) if neither title nor content match. */
    if (score) {
      result.score = score;
      results.push(result);
    }
  });

  /* Highest score first. */
  results.sort((a, b) => (a.score < b.score) ? 1 : -1);

  return results;
};

/**
 * Big holder for a bunch of template literals.
 *
 * @param results
 * @returns {string}
 */
let renderResults = (results) => {
  /* Default if no results. */
  let output = `
    <div class="alert position--relative js--dismissible alert--warning" role="alert">
      <p>No results found.</p>
    </div>
  `;
  let resultsSingularOrPlural = `<em>1</em> result`;

  if (results.length) {
    /* Go to great lengths to avoid "1 results found". */
    if (results.length >= 2) {
      resultsSingularOrPlural = `<em>${results.length}</em> results`
    }

    /* Ordered list for semantics. */
    output = `
      <div class="search--results-counter text-align--center margin-vertical--4">
        ${resultsSingularOrPlural} found.
      </div>
      <ol class="search--results-list list-style--none layout--multiple--horizontal">
    `;

    /* @see ./_includes/molecules/card.html */
    Array.prototype.forEach.call(results, (result) => {
      output += `
        <li class="card js--child--link display--flex flex-direction--column">
          <div class="card--text padding-horizontal--4 padding-vertical--4">
            <h3 class="card--title font-size--1p25em">
              <a href="${result.url}">${result.title}</a>
            </h3>

            <p class="card--description font-size--p75em">${result.excerpt}</p>
          </div>

          <figure class="figure figure--image figure--card--image order--neg1 box-shadow--lifted-edges">
            <picture class="picture" itemprop="image">
              <img src="/assets/images/${result.image.src}" alt="${result.image.alt}" />
            </picture>
          </figure>
        </li>
      `;
    });

    output += `</ol>`;
  }

  return output;
};

/**
 * Outsourcing our event listener so we can use the same one for multiple events,
 * and call it directly when fetch is successful to trigger initial page state.
 *
 * @param event
 */
let qListener = (event) => {
  /* The q name/param is reserved on this site for search. */
  if (event.target.name === 'q') {
    Array.prototype.forEach.call(qInputs, (elem) => {
      /* Header and on-page search boxes mirror each other. */
      if (elem !== event.target) {
        elem.value = event.target.value;
      }
      else if (!event.isLoad) {
        /* Keep the q param in the address bar updated, for API and navigation. */
        history.replaceState(null, true, window.location.pathname
          + '?q=' + encodeURIComponent(event.target.value));
      }
    });

    /* Dynamically update the results with a slight debounce */
    if (resultsElements.length) {
      if ((Date.now() - searchDebounce) > 150) {
        const results = renderResults(filterResults(event.target.value));
        Array.prototype.forEach.call(resultsElements, (elem) => {
          elem.innerHTML = results;
        });

        searchDebounce = Date.now();
      }
    }
  }
};

/**
 * The fetch() call and its promise kick off this whole thing. We wait for the
 * JSON to come back, then we make the data global and manage memory. Then we
 * start listening for events and kicking off page dynamism.
 */
fetch('../../../assets/data/search-index.json')
  .then((blob) => {
    return blob.json();
  })
  .then((data) => {
    searchIndex = data;
    /* Delete local and rely on global for memory. */
    data = null;

    document.addEventListener('change', qListener, false);
    document.addEventListener('keyup', qListener, false);

    if (urlParams.has("q")) {
      Array.prototype.forEach.call(qInputs, (elem) => {
        elem.value = urlParams.get("q");

        /* Trigger a fake search input. Even though the inputs just got the right
         * value, let the listener know it's load so it won't mess with the history. */
        qListener({
          "isLoad": true,
          'target': elem
        });
      });
    }
  })
  .catch((err)=>  {
    console.warn('Something went wrong.', err);
  });
