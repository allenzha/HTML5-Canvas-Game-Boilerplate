Ext.data.JsonP.World({"tagname":"class","name":"World","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-World","members":{"cfg":[],"property":[{"name":"height","tagname":"property","owner":"World","meta":{},"id":"property-height"},{"name":"width","tagname":"property","owner":"World","meta":{},"id":"property-width"},{"name":"xOffset","tagname":"property","owner":"World","meta":{},"id":"property-xOffset"},{"name":"yOffset","tagname":"property","owner":"World","meta":{},"id":"property-yOffset"}],"method":[{"name":"centerViewportAround","tagname":"method","owner":"World","meta":{},"id":"method-centerViewportAround"},{"name":"getOffsets","tagname":"method","owner":"World","meta":{},"id":"method-getOffsets"},{"name":"isInView","tagname":"method","owner":"World","meta":{},"id":"method-isInView"},{"name":"isInWorld","tagname":"method","owner":"World","meta":{},"id":"method-isInWorld"},{"name":"resize","tagname":"method","owner":"World","meta":{},"id":"method-resize"}],"event":[{"name":"resizeWorld","tagname":"event","owner":"World","meta":{},"id":"event-resizeWorld"}],"css_var":[],"css_mixin":[]},"linenr":919,"files":[{"filename":"actors.js","href":"actors.html#World"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/actors.html#World' target='_blank'>actors.js</a></div></pre><div class='doc-contents'><p>The World object.</p>\n\n<p>The World represents the complete playable game area. Its size can be set\nexplicitly or is automatically determined by the \"data-worldwidth\" and\n\"data-worldheight\" attributes set on the HTML canvas element (with a\nfallback to the canvas width and height). If the size of the world is larger\nthan the canvas then by default the view of the world will scroll when the\n<a href=\"#!/api/global-property-player\" rel=\"global-property-player\" class=\"docClass\">player</a> approaches a side of the canvas.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-height' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='World'>World</span><br/><a href='source/actors.html#World-property-height' target='_blank' class='view-source'>view source</a></div><a href='#!/api/World-property-height' class='name not-expandable'>height</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'><p>The height of the world.</p>\n</div><div class='long'><p>The height of the world.</p>\n</div></div></div><div id='property-width' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='World'>World</span><br/><a href='source/actors.html#World-property-width' target='_blank' class='view-source'>view source</a></div><a href='#!/api/World-property-width' class='name not-expandable'>width</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'><p>The width of the world.</p>\n</div><div class='long'><p>The width of the world.</p>\n</div></div></div><div id='property-xOffset' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='World'>World</span><br/><a href='source/actors.html#World-property-xOffset' target='_blank' class='view-source'>view source</a></div><a href='#!/api/World-property-xOffset' class='name not-expandable'>xOffset</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'><p>The pixel-offset of what's being displayed in the canvas compared to the\n  world origin.</p>\n</div><div class='long'><p>The pixel-offset of what's being displayed in the canvas compared to the\n  world origin.</p>\n</div></div></div><div id='property-yOffset' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='World'>World</span><br/><a href='source/actors.html#World-property-yOffset' target='_blank' class='view-source'>view source</a></div><a href='#!/api/World-property-yOffset' class='name not-expandable'>yOffset</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'><p>The pixel-offset of what's being displayed in the canvas compared to the\n  world origin.</p>\n</div><div class='long'><p>The pixel-offset of what's being displayed in the canvas compared to the\n  world origin.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-centerViewportAround' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='World'>World</span><br/><a href='source/actors.html#World-method-centerViewportAround' target='_blank' class='view-source'>view source</a></div><a href='#!/api/World-method-centerViewportAround' class='name expandable'>centerViewportAround</a>( <span class='pre'>x, y</span> )</div><div class='description'><div class='short'>Center the viewport around a specific location. ...</div><div class='long'><p>Center the viewport around a specific location.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>x</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The x-coordinate around which to center the viewport.</p>\n</div></li><li><span class='pre'>y</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The y-coordinate around which to center the viewport.</p>\n</div></li></ul></div></div></div><div id='method-getOffsets' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='World'>World</span><br/><a href='source/actors.html#World-method-getOffsets' target='_blank' class='view-source'>view source</a></div><a href='#!/api/World-method-getOffsets' class='name expandable'>getOffsets</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Returns an object with 'x' and 'y' properties indicating how far offset\nthe viewport is from the world origin. ...</div><div class='long'><p>Returns an object with 'x' and 'y' properties indicating how far offset\nthe viewport is from the world origin.</p>\n</div></div></div><div id='method-isInView' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='World'>World</span><br/><a href='source/actors.html#World-method-isInView' target='_blank' class='view-source'>view source</a></div><a href='#!/api/World-method-isInView' class='name expandable'>isInView</a>( <span class='pre'>box, [partial]</span> ) : Boolean</div><div class='description'><div class='short'>Determine whether a Box is inside the viewport. ...</div><div class='long'><p>Determine whether a Box is inside the viewport.</p>\n\n<p>To test whether a Box is inside the World, see <a href=\"#!/api/World-method-isInWorld\" rel=\"World-method-isInWorld\" class=\"docClass\">World.isInWorld</a>().</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>box</span> : <a href=\"#!/api/Box\" rel=\"Box\" class=\"docClass\">Box</a><div class='sub-desc'><p>The Box object to check for visibility.</p>\n</div></li><li><span class='pre'>partial</span> : Boolean (optional)<div class='sub-desc'><p>Indicates whether to consider the Box inside the viewport if it is only\n  partially inside (true) or fully inside (false).</p>\n<p>Defaults to: <code>false</code></p></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>true if the Box is inside the viewport; false otherwise.</p>\n</div></li></ul></div></div></div><div id='method-isInWorld' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='World'>World</span><br/><a href='source/actors.html#World-method-isInWorld' target='_blank' class='view-source'>view source</a></div><a href='#!/api/World-method-isInWorld' class='name expandable'>isInWorld</a>( <span class='pre'>box, [partial]</span> ) : Boolean</div><div class='description'><div class='short'>Determine whether a Box is inside the world. ...</div><div class='long'><p>Determine whether a Box is inside the world.</p>\n\n<p>To test whether a Box is inside the viewport, see <a href=\"#!/api/World-method-isInView\" rel=\"World-method-isInView\" class=\"docClass\">World.isInView</a>().</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>box</span> : <a href=\"#!/api/Box\" rel=\"Box\" class=\"docClass\">Box</a><div class='sub-desc'><p>The Box object to check.</p>\n</div></li><li><span class='pre'>partial</span> : Boolean (optional)<div class='sub-desc'><p>Indicates whether to consider the box inside the world if it is only\n  partially inside (true) or fully inside (false).</p>\n<p>Defaults to: <code>false</code></p></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>true if the Box is inside the world; false otherwise.</p>\n</div></li></ul></div></div></div><div id='method-resize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='World'>World</span><br/><a href='source/actors.html#World-method-resize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/World-method-resize' class='name expandable'>resize</a>( <span class='pre'>newWidth, newHeight</span> )</div><div class='description'><div class='short'>Resize the world to new dimensions. ...</div><div class='long'><p>Resize the world to new dimensions.</p>\n\n<p>Careful! This will shift the viewport regardless of where the player is.\nObjects already in the world will retain their coordinates and so may\nappear in unexpected locations on the screen.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>newWidth</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The new width to which to resize the world.</p>\n</div></li><li><span class='pre'>newHeight</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The new height to which to resize the world.</p>\n</div></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-resizeWorld' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='World'>World</span><br/><a href='source/actors.html#World-event-resizeWorld' target='_blank' class='view-source'>view source</a></div><a href='#!/api/World-event-resizeWorld' class='name expandable'>resizeWorld</a>( <span class='pre'>changed</span> )</div><div class='description'><div class='short'>Broadcast that the world size changed so that objects already in the\n  world or other things that depend on the world...</div><div class='long'><p>Broadcast that the world size changed so that objects already in the\n  world or other things that depend on the world size can update their\n  position or size accordingly.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>changed</span> : Object<div class='sub-desc'><p>An object with <code>x</code> and <code>y</code> properties representing how far the\n  viewport shifted on each axis, and a <code>world</code> property containing the\n  world object that changed size.</p>\n</div></li></ul></div></div></div></div></div></div></div>"});