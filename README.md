Git Commands
______________________________________________________________________
$ git status
    shows which files are in which state.

$ git branch

    shows current branch and list all the branch.

$ git checkout <branchname>

    switch to another branch.

$ git checkout -b <branchname>

    create a new branch and switch to that branch.

$ git merge <branchname>

    merge the branch into the current branch.
________________________________________________________________________________________________________________________________    
To start with Git first you need to create a account on GitHub or Bitbucket.org
After creating account create a Repository
_____________________________________________

Cloning a Repository

$ git clone <repositary url>

    repository url = https://github.com/codewithnaveen/Learn-Git.git
    copying the remote repository to local machine
    this will get the repository in a new folder,
    and the same will be same as repository name
    you will do this only once (first time)

You will go to the local repository folder in your machine make changes in the files & folders then you need to push these changes to the remote server

$ git add .

    adding our changes to the local respository

$ git commit -m "commit message"

    we are writing those changes to the local repository
    so that they can be tracked

$ git push origin master

    now we want the local changes to be saved in the remote/origin server
    we will push those changes to remote server in master branch

$ git pull origin master

    to get the latest changes from the remote repository

