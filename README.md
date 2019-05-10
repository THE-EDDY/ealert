<p align="center">
    <img alt="Logo" src="https://github.com/THE-EDDY/ealert/blob/master/assets/logo.png" width="300">
</p>

<p align="center">
A beautiful alternative to Javascript's Alert. 
Perfect for background activity notifications and any other notification in your application. 
</p>
<p align="center">
  <img alt="Sample alert" src="https://github.com/THE-EDDY/ealert/blob/master/assets/ealert.gif">
</p>

### Getting Started

Download eAlert zipped file. Main files are found in the "src" folder. 

### Prerequisites

Your application must have [jQuery](https://jquery.com). 


### Installing

The simplest way to use eAlert is to include the minified script:

##### Javascript
```
<script src="https://YOUR-APPLICATION-DIRECTORY/ealert.min.js"></script>
```

##### CSS
```
<link rel="stylesheet" href="https://YOUR-APPLICATION-DIRECTORY/ealert.min.css"></script>
```

## Examples

Show an info alert
```
ealert.fire('info','This is my alert message');
```

Show a success alert
```
ealert.fire('success','This is my alert message');
```

Show a danger alert
```
ealert.fire('danger','This is my alert message');
```

### Customization

##### Change display duration

The default duration is 3 seconds. This can be changed using:

```
ealert.duration = 5000 //5 seconds
```

##### Position

The default position is "bottom" which will show the alert at the bottom
center of the page. This can be changed using: 

```
ealert.position = "top left"
```

Available options include:
* Top
* Right
* Left
* Bottom

You can combine multiple positions such as "bottom left","bottom right",
"top left","top right". When you use "bottom" only, the alert is shown at
bottom center of the page and when you use "top" only, the alert is shown
at the top center of the page.
