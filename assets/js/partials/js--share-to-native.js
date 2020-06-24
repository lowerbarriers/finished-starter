/**
 * @file
 * If the Web Share API is present, do some share-y things.
 */

const shareToNativeButton = `
    <button type="button" class="js--share-to-native fab position--fixed bottom--0 color--grey
      right--0 font-size--2em margin-horizontal--4 margin-vertical--4 z-index--3"
      aria-label="Share this page">
      <figure class="figure figure--icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54 54">
          <path fill-rule="evenodd" d="M46 35v9c0 2-1 5-3 7l-6 2H9l-7-2c-2-2-2-5-2-7V16c0-2 0-5 2-6 2-2 4-3 7-3h9v1l-1 1-4 2H9l-4 2-1 3v28l1 4 4 1h28l3-1 2-4v-8l2-1 1-1zm8-16L41 32h-2l-1-2v-6h-6c-7 0-12 1-14 4-3 3-4 8-3 16v1h-1l-1-1v-1l-2-2-1-3a24 24 0 01-2-8v-3l1-3a12 12 0 012-6l2-2 3-2 5-2 5-1h12V5l1-2 1-1 1 1 13 13z"/>
        </svg>
      </figure>
    </button>
  `;

if ("share" in navigator) {
  const shareToNative = async function (
    shareUrl,
    shareTitle,
    shareText,
    shareImgUrl
  ) {
    let share = {
      url: shareUrl,
      title: shareTitle,
      text: shareText,
    };

    if (shareImgUrl) {
      const shareFileName = shareImgUrl.substr(
        shareImgUrl.lastIndexOf("/") + 1
      );
      let fetchImgUrl = shareImgUrl;

      if (fetchImgUrl.indexOf(window.location.hostname) !== -1) {
        fetchImgUrl = fetchImgUrl.substr(
          fetchImgUrl.indexOf(window.location.origin) +
            window.location.origin.length
        );
      }

      try {
        const response = await fetch(fetchImgUrl);
        const blob = await response.blob();
        const file = new File([blob], shareFileName, { type: blob.type });
        share.files = [file];
      } catch (err) {
        console.log(err.name, err.message);
      }
    }

    await navigator.share(share);
  };

  document.body.insertAdjacentHTML("beforeEnd", shareToNativeButton);
  document.addEventListener(
    "click",
    function (event) {
      if (
        event.target !== document &&
        event.target.closest(".js--share-to-native")
      ) {
        /* Append document.querySelector('[property="og:image"]').getAttribute('content') to share it as image. */
        shareToNative(
          window.location.href,
          document.title,
          document
            .querySelector('[property="og:description"]')
            .getAttribute("content")
        );
      }
    },
    false
  );
}
