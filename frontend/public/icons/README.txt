Sidebar icons (required for the dashboard):

  logo_white_icon.png   (36×50) – collapsed sidebar
  White.png             – expanded sidebar (HEALTH दोस्त logo)
  menu_stack.png       (24×24)
  home.png             (24×24)
  appointments.png     (24×24)
  cloud.png            (24×24)
  machine.png          (24×24)
  exit.png             (24×24)

To copy from Cursor assets, run this in PowerShell from the repo root (adjust ASSETS if needed):

  $ASSETS = "$env:USERPROFILE\.cursor\projects\c-Users-salga-OneDrive-Desktop-cursor-files-final-healthdost\assets"
  $ICONS = "frontend\public\icons"
  Copy-Item "$ASSETS\*logo_white_icon*.png" "$ICONS\logo_white_icon.png"
  Copy-Item "$ASSETS\*menu_stack*.png" "$ICONS\menu_stack.png"
  Copy-Item "$ASSETS\*home*.png" "$ICONS\home.png"
  Copy-Item "$ASSETS\*appointments*.png" "$ICONS\appointments.png"
  Copy-Item "$ASSETS\*cloud*.png" "$ICONS\cloud.png"
  Copy-Item "$ASSETS\*machine*.png" "$ICONS\machine.png"
  Copy-Item "$ASSETS\*exit*.png" "$ICONS\exit.png"
