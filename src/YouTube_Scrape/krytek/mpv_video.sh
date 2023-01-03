#!/krytek/bash

QUERY="$@"
mpv "$(krytek-yts $QUERY)"
