# Sprint 1
name: Jack Skupien

github ID: jskupien24

group name: GitFit

### What you planned to do

* Issue 10: home page
    * Link: https://github.com/utk-cs340-fall22/GitFit/issues/10
* Issue 11: tabs
    * Link: https://github.com/utk-cs340-fall22/GitFit/issues/11
* Issue 12: make home page scalable for mobile users and smaller windows
    * Link: https://github.com/utk-cs340-fall22/GitFit/issues/12

### What you did not do

I definitely did not get as much done as I wanted to because I had to spend a lot of time learning ReactJS, since I had never used it before. I also had to spend a portion of my time downloading software and getting my workspace set up. I feel like I still got everything I wanted to done, but I don't think it's as in depth as I wanted it to be. For example:
* I wanted the animated logo I made to be in the corner instead of just text
* I wanted to make the hamburger menu slightly less finnicky. 

### What problems you encountered

Since React JS recently updated to a new software, a lot of the example code and tutorials did not still work because many of the keywords changed to something new, so that definitely was a speed bump in my process.

### Issues you worked on

* [#10](https://github.com/utk-cs340-fall22/GitFit/issues/10)
* [#11](https://github.com/utk-cs340-fall22/GitFit/issues/11)
* [#12](https://github.com/utk-cs340-fall22/GitFit/issues/12)

### Files you worked on

* GitFit/Jack/public/videos/gitfit-logo.mp4
* GitFit/Jack/public/videos/gitfitvid.mp4
* GitFit/Jack/public/Index.html
* GitFit/Jack/.gitignore
* GitFit/Jack/package.json
* GitFit/Jack/package-lock.json
* GitFit/Jack/src/components/Button.js
* GitFit/Jack/src/components/Button.css
* GitFit/Jack/src/components/HeroSection.js
* GitFit/Jack/src/components/HeroSection.css
* GitFit/Jack/src/components/Navbar.js
* GitFit/Jack/src/components/Navbar.css
* GitFit/Jack/src/components/pages/Home.js
* GitFit/Jack/src/App.js
* GitFit/Jack/src/App.css
* GitFit/Jack/src/Index.js

### What you accomplished

I made an interactive homepage that looks really good in my humble opinion. First, I worked on the navbar at the top. It is black and has a left justified GitFit logo. On the right there are three tabs that highlight when you hover over them. For now the tabs are just "Home" and some other placeholder tabs that I created, since we haven't decided on the full format of our website. When you click any of these tabs they take you to their respective page, each of which is still just a blank page except for "Home," but I wanted to make sure the routing works. Further right on the navbar is a signup button that also routes to a blank page, but will eventually link to Fort's signup page. Another goal of mine was to make these tabs scaleable, in case users are on a mobile device or minimize their window. For this I created a hamburger menu that appears instead of the tabs when the window is smaller than a certain size. When clicked it opens a list menu with each tab name, which are clickable, routing properly and close the menu when clicked. Finally, I added a background video that plays on a muted loop and looks very professional. For this, I just converted an exercise commercial to an mp4 and cut out all of the parts that showed the brand name or product. This probably wouldn't be a super kosher approach if I was building an actual company website, but for these purposes it worked great.