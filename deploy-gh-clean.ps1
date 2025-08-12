# Usage: .\deploy-gh.ps1 <github-username> <repo-name> [public|private]
param(
  [string]$User = "sasou-web",
  [string]$Repo = "portfolio-samir-lain",
  [string]$Visibility = "public"
)

function Assert-Command($name) {
  if (-not (Get-Command $name -ErrorAction SilentlyContinue)) {
    Write-Error "Command not found: $name"
    exit 1
  }
}

Assert-Command git
Assert-Command gh

Write-Host "Checking GitHub CLI authentication..."
$auth = (gh auth status 2>$null)
if ($LASTEXITCODE -ne 0) { gh auth login }

Write-Host "Initializing local Git repository..."
git init | Out-Null
git add -A
git commit -m "feat: initial commit (Astro + Lain)" 2>$null
git branch -M main 2>$null

Write-Host "Creating repository $User/$Repo ($Visibility)..."
$create = gh repo create "$User/$Repo" --$Visibility --source=. --remote=origin --push --disable-wiki --confirm
if ($LASTEXITCODE -ne 0) {
  Write-Host "Repository may already exist. Adding remote and pushing..."
  git remote add origin "https://github.com/$User/$Repo.git" 2>$null
  git push -u origin main
}

Write-Host "Triggering Pages build via GitHub Actions..."
gh run watch

Write-Host "Done!"
Write-Host ("Expected URL: https://{0}.github.io/{1}/" -f $User, $Repo)
