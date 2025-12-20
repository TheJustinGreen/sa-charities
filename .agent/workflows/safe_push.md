---
description: Safe push workflow that enforces build verification
---
1. Check for build errors
// turbo
2. yarn run build
3. Add all changes
// turbo
4. git add .
5. Commit changes (User must provide message)
6. git commit -m "your message here"
7. Push changes
// turbo
8. git push
