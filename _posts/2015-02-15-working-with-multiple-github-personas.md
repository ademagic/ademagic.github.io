---
layout: post
title: Working with multiple GitHub personas
synopsis: The ups and downs of trying to run two GitHub personas on one machine.
---
I've been unsuccessfully trying to manage two GitHub personas for a while – a business and a personal one. I've also made the move recently from Windows to Mac (which I use for work), and trying to run both personas on it has been less than smooth.

If you're trying to do the same, I hope walking you through my process will help. Mind you, I haven't yet come to a complete solution – but I suspect I know what it is. <strong>TL;DR</strong> - Merge your GitHub accounts.

If that's not an option for you and you prefer the double life, read on.

## Terminology

I had the most trouble wrapping my head around Git and GitHub jargon, so unsurprisingly the first thing I noticed while trawling through articles on the web is that I (and others) had some terminology confused. So first off, let's set some common language:

- <strong>Repository (Repo)</strong>: The codebase which you're storing and tracking with git.
- <strong>Fork</strong>: A copy of a repository. This is where it "forks" from the original repository, and their histories potentially differ.
- <strong>Remote</strong>: A separate repository of code which is important to your repository. Usually accompanied by an SSH or HTTPS address, this could refer to your personal fork of a certain repo, someone else's fork, or the original repo itself.
- <strong>User/Persona</strong>: You. The user will be recorded against every commit and push made in any given repo's history. This is what I'm trying to run two of.
- <strong>Account</strong>: The confusing one. This is a configuration of an ssh id, a host, and a repo. Some articles I've seen online also refer to a user or persona as an account. 

## Setting up multiple accounts

You'll need to generate SSH Keys for each of your accounts. You can follow [GitHub's own instructions](https://help.github.com/articles/generating-ssh-keys/) on how to create a single key, or just go ahead and learn how to [manage multiple SSH keys](http://mherman.org/blog/2013/09/16/managing-multiple-github-accounts/#.VNs9jmSUcqZ).

The process is basic – you create an ssh key for each account that you want to use, and then you link it to your GitHub user. Then, when adding your remotes, all you have to do is specify the appropriate host. For example, I use <code>git@github.com</code> when specifying business remotes, and <code>git@personal</code> when specifying personal remotes. This ensures that the correct SSH id key in your  config is used, and you're actually allowed access to your repository via SSH.

You should always test your SSH connection to make sure that you're using the correct host, particularly if you're switching between personas a lot. You can do that through simply typing <code>ssh -T git@github.com</code> (or whatever your host may be). GitHub will return a success message if it recognises that you have permission to access the repo with that host.

```
Hi youngwolf! You've successfully authenticated, but GitHub does not provide shell access.
```

<strong>Note:</strong> This does not mean that git will associate your local repo with a certain persona. You'll still need to switch between users before committing any code.

## Specifying a persona for your repository

Alright, so your ssh keys are set up and you can SSH in successfully. You've cloned a repo, and now you want to work on it and commit code to it. You'll need to associate a persona with that repository.

You can do this in one of two ways; either by specifying a user in each repository, or by setting a global user. Git will use the local user first (whatever you've specified in your repo), and will default back to the global user if you don't have one specified.

To set up a persona inside a repository, run these commands inside the repo:

```
git config user.name "Robb Stark"
git config user.email "king@thenorth.com"
```

To set up a global persona, run these commands anywhere:

```
git config --global user.name "Robb Stark"
git config --global user.email "king@thenorth.com"
```

For example, I do most of my work on my macbook, which is my work computer. I've set my global git user to my business persona, and I separately set my personal persona against my private repos.

##Things may go wrong

One of the issues I've come across here is that sometimes GitHub (or ssh, I haven't worked out which) will forget to recognise the switch in users. This will usually manifest itself by you not being allowed push/pull access to a certain remote you may be working with, or you may be recording all your commits as the wrong user.

I still haven't figured out how to fix this, but resetting the user using the above commands (or restarting my machine) usually fixes the problem.

However, some services I use that may require repo permissions and access during build steps tend to ignore my efforts. Things like virtual machines might cache a certain user for use with pulling down other dependencies. I haven't been able to consistently replicate this, or to identify the issue (or the fix) with any certainty.

##Back to the TL;DR

For myself, I've reached the point of diminishing returns with this investigation. I realised this especially when I discovered that even GitHub themselves recommend [merging your accounts](https://help.github.com/articles/merging-multiple-user-accounts/) instead of continuing with two. Even their old page on managing [multiple GitHub accounts](http://github.com/guides/multiple-github-accounts) now redirects to another page.

I haven't tried to merge my accounts yet, but I plan to when I'm good and ready (and sure that I won't break anything on my work setup!). In the meantime, I'm thinking of trying out [git aliases for quick account switching](http://arnaudrinquin.github.io/worflow/2014/03/11/fast-github-account-switch/) which won't solve my problem, but will definitely save me some typing.

I'm assuming that the reason GitHub recommends merging is because of the reasons I've mentioned above – certain services getting confused between GitHub users and permissions et cetera, though I'm sure there are many other reasons.

If you are brave enough to go on and you manage to solve the problem, or you feel like educating/correcting me on something, please drop me a comment below.

-----

###References

- [How to work with GitHub and multiple accounts](http://code.tutsplus.com/tutorials/quick-tip-how-to-work-with-github-and-multiple-accounts--net-22574) by Jeffrey Way via Tutsplus
- [Managing multiple GitHub accounts](http://mherman.org/blog/2013/09/16/managing-multiple-github-accounts/#.VMF2C2SUcqY) by Michael Herman
- [GitHub for Work and Play](http://ricardianambivalence.com/2013/09/22/github-for-work-and-play-multiple-accounts/)
- [Stack Overflow - Multiple GitHub accounts on the same computer](http://stackoverflow.com/questions/3860112/multiple-github-accounts-on-the-same-computer)
- [Fast GitHub account switch](http://arnaudrinquin.github.io/worflow/2014/03/11/fast-github-account-switch/) by Arnaud Rinquin