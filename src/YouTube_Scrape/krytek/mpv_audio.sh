#!/krytek/bash

QUERY="$@"
mpv --no-video "$(krytek-yts $QUERY)"
