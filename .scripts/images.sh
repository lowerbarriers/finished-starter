####
## @file
## Optimize jpg and png images. Convert jpg, png, and gif to webp where passible.
##
## This script requires the following utilities to be installed (non-standard):
##   * jpegoptim
##   * pngcrush
##   * optipng
##   * webp (metapackage including cwebp and gif2webp)
##
## Run this script from the repo root (ex: `.scripts/images.sh`).
####

##
# Optimize legacy formats.
#
# Note: These are disabled in the script because we have webp enabled and all the images already
# in the repo are optimized. Re-optimizing JPEGs especially is lossy, and PNGs is time-consuming, so if we operated on
# the assumption that most users can use our webp versions then optimizing the legacies is a more-rare step.
#
# @todo Make a flag for this in bash.
##
#for i in `find assets/ -name "*.jpg"`; do jpegoptim --max=90 --strip-all --all-progressive --preserve --totals $i; done
#for i in `find assets/ -name "*.png"`; do pngcrush -e .png2 -rem allb -brute -reduce $i; mv ${i}2 $i; optipng -o7 $i; done

# Create webp copies that are just the original filenames with .webp appended (to make it easy for Jekyll to conditionally
# find them.
for i in `find assets/ -name "*.jpg"`; do cwebp -q 75 $i -o $i.webp; done
for i in `find assets/ -name "*.png"`; do cwebp -q 85 $i -o $i.webp; done
for i in `find assets/ -name "*.gif"`; do gif2webp -q 75 $i -o $i.webp; done

# If cavif [https://github.com/kornelski/cavif-rs/releases] available, make AVIFs like webp above.
# @todo Switch this to the reference implementation once that's stable.
for i in `find assets/ -name "*.jpg"`; do cavif $i -o $i.avif; done
for i in `find assets/ -name "*.png"`; do cavif $i -o $i.avif; done

##
# Write image metadata to _data for includes and other purposes.
#
# Requires ImageMagick `identify` utility and other standard utils.
##

# First remove the existing data file and replace it.
rm _data/image-metadata.yml
touch _data/image-metadata.yml
echo "images:" | tee -a _data/image-metadata.yml

# Go to where the images are.
cd assets/images

# Loop through the images and write the metadata to the file in yml format.
# Find uses regex, and the character class must not contain the letter a because then it will match the avif files.
for i in `find . -type f -regextype posix-egrep -iregex "\./.*\.[webjpngif]{3,4}"`; do
  echo "  - path: '"`echo ${i} | cut -c3-`"'" | tee -a ../../_data/image-metadata.yml
  echo "    height: "`identify -format '%h' $i` | tee -a ../../_data/image-metadata.yml
  echo "    width: "`identify -format '%w' $i` | tee -a ../../_data/image-metadata.yml
done
