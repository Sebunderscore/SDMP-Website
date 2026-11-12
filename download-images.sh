#!/bin/bash
# Haalt alle afbeeldingen van de Squarespace-CDN binnen naar ./img en zet de site daarna op lokale afbeeldingen.
# Draai dit VOORDAT je Squarespace opzegt. Gebruik: cd naar deze map, dan: bash download-images.sh
set -e
cd "$(dirname "$0")"
mkdir -p img
CDN="https://images.squarespace-cdn.com/content/v1/5e6cfe4cba0df96243ce0859/"

grep -o "img('[^']*'" js/content.js | sed "s/img('//; s/'$//" | sort -u | while read -r path; do
  id="${path%%/*}"
  file="${path#*/}"
  ext=$(echo "$file" | grep -oiE '\.(jpe?g|png|webp)$' | tr 'A-Z' 'a-z')
  [ -z "$ext" ] && ext=".jpg"
  out="img/${id}${ext}"
  if [ ! -s "$out" ]; then
    echo "↓ $file"
    curl -sSfL "${CDN}${path}?format=1500w" -o "$out" || echo "  MISLUKT: $path"
  fi
done

sed -i.bak 's/const USE_LOCAL = false;/const USE_LOCAL = true;/' js/content.js && rm -f js/content.js.bak
echo "Klaar. $(ls img | wc -l | tr -d ' ') afbeeldingen in ./img, site gebruikt nu lokale bestanden."
