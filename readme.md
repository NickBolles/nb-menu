#&lt;NB-Menu&gt;#
A polymer component for creating recursive menus from JSON.

##To Get Started##
Install with bower:
<br />
`bower install nb-menu`
<br />
Import the html file
<br />
`<link rel="import" href="bower_components/nb-menu/nb-menu.html">`
<br />
and start using it!
<br />
`<nb-menu></nb-menu>`
<br />
Look below at *Adding Content to the Menu* for information on how to set the items
##Why not use polymers stock [core-menu](https://www.polymer-project.org/docs/elements/core-elements.html#core-menu)?##
&lt;nb-menu&gt; is smart.
It creates a menu based on JSON that you give to it.
&lt;nb-menu&gt; doesnt just create recursive menus with little effort though...
- It works great with [core-drawer-panel](https://www.polymer-project.org/docs/elements/core-elements.html#core-drawer-panel) (See `toggleDrawer` in "JSON format" below)
- It automatically scrolls over when the depth of submenus gets to deep. This can be disabled (see `Published Attributes` below)

##Published Attributes##
There are 4 published attributes on &lt;nb-menu&gt;
- selectedIndex -- This states the initial selected item. Default is null (polymer default)
- selectedItem -- The item that is currently selected. Default is -1 (nothing selected)
- items -- The JSON of items to construct the menu from. Default is []
- adjustForDepth -- Adjusts the menu when the depth is more then 2 so that the items stay in view. Useful for use with the <core-drawer-panel>. Default is true

##Adding Content to the Menu##
if your &lt;nb-menu&gt; has an id of `menu` like this:
`<nb-menu id="menu"></nb-menu>`
you can set the content of it like this
```JSON
document.getElementById('menu').items = [
                                           {
                                                "label": "item 1",
                                                "action": "alert('hello from item 1')",
                                                "icon": "arrow-back",
												"toggleDrawer": true,
                                                "children": [
                                                   {
                                                        "label": "item 1-1",
                                                        "action": "console.log('you clicked item 1-1')",
                                                        "icon": "assignment-ind",
														"toggleDrawer": true
                                                   }
                                                ]
                                           }
                                       ]
```
The JSON can have 5 properties
| name | Description |
| -------- | --------- |
| label | Sets the Text for the button |
| action | Sets the action for the button. Should be a function or several functions and should only include single quotes, not double |
| icon | The name of one of the icons in http://www.polymer-project.org/components/core-icons/demo.html or one that is included in your project before importing <nb-menu> |
| children | An array of items |
| toggleDrawer | Boolean, whether clicking on this item should toggle the <core-drawer-panel> |


##Issues or suggestions?##
Create an issue on github or email me at nickbolles@live.com