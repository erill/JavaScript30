// The problem with function parameters maintenance. 
// Adding new parameter to function forces changes in 
// each function call and it can easly broke legacy code.

_KSM = 
{
    draw: function(left, top, width, heigth, stroke, fill)
    {
        var canvas = document.getElementById('theCanvas');
        if (canvas.getContext)
        {
            var context = canvas.getContext('2d');
            context.strokeStyle = 'black';
            context.fillStyle = 'silver';
            context.fillRect(left, top, width, heigth);
            context.strokeRect(left, top, width, heigth);
        }
    }
}

// Stub functions 
// - the old version of function calls orginal version
// of code with some default params 
// - old function has only 1 line od code that calls the newest function
// - legacy code calls stub, new function call new function name
// - confusing interface for new team members

_KSM = 
{
    draw: function(left, top, width, heigth, stroke, fill)
    {
        _KSM.drawNew(left, top, width, heigth, 'black', 'silver');
    },
    drawNew: function(left, top, width, heigth, stroke, fill)
    {
        var canvas = document.getElementById('theCanvas');
        if (canvas.getContext)
        {
            var context = canvas.getContext('2d');
            context.strokeStyle = stroke;
            context.fillStyle = fill;
            context.fillRect(left, top, width, heigth);
            context.strokeRect(left, top, width, heigth);
        }
    }
}


// Default parameters
// - useful when 1 or 2 params are optional
// - optional params should be at the end of the list
// - may have pass 'undefined' value

_KSM = 
{
    draw: function(left = 10, top = 10, width = 100, heigth = 100, stroke = 'black', fill = 'silver')
    {
        var canvas = document.getElementById('theCanvas');
        if (canvas.getContext)
        {
            var context = canvas.getContext('2d');
            context.strokeStyle = stroke;
            context.fillStyle = fill;
            context.fillRect(left, top, width, heigth);
            context.strokeRect(left, top, width, heigth);
        }
    }
}

// Object pattern 
// - uses one object param instead of multiple
// - properties of an object are optional by nature
// - the order of object properties doesnt matter
// - object params are passed by reference

_KSM = 
{
    draw: function(object)
    {
        var canvas = document.getElementById('theCanvas');
        if (canvas.getContext)
        {
            var context = canvas.getContext('2d');
            if (typeof options !== 'object') 
                options = {};
            if (typeof options.left === 'undefined')
                options.left = 10;
            if (typeof options.top === 'undefined')
                options.top = 10;
            if (typeof options.width === 'undefined')
                options.width = 100;
            if (typeof options.heigth === 'undefined')
                options.heigth = 100;
            if (typeof options.stroke === 'undefined')
                options.stroke = 'black';
            if (typeof options.fill === 'undefined')
                options.fill = 'silver';

            context.strokeStyle = options.stroke;
            context.fillStyle = options.fill;
            context.fillRect(options.left, options.top, options.width, options.heigth);
            context.strokeRect(options.left, options.top, options.width, options.heigth);
        }
    }
}

// Object pattern with legacy code support
// - gets more complicated when honoring previous versions

_KSM = 
{
    draw: function(left, top, width, heigth, stroke, fill)
    {
        var canvas = document.getElementById('theCanvas');
        if (canvas.getContext)
        {
            var context = canvas.getContext('2d'),
                options = {};

            if (typeof left !== 'undefinde') {
                if (typeof left === 'object') {
                    options = left;
                } else {
                    options = {
                        left: left,
                        top: top,
                        width: width,
                        heigth: heigth,
                        stroke: stroke,
                        fill: fill
                    };
                }
            }

            // new parameter that doesnt break the code
            if (options.clear) {
                canvas.width = canvas.width; // reassign new width will clear canvas
            }

            options.left = options.left || _KSM.drawOptions.left;
            options.top = options.top || _KSM.drawOptions.top;
            options.width = options.width || _KSM.drawOptions.width;
            options.heigth = options.heigth || _KSM.drawOptions.heigth;
            options.stroke = options.stroke || _KSM.drawOptions.stroke;
            options.fill = options.fill || _KSM.drawOptions.fill;
            
            context.strokeStyle = options.stroke;
            context.fillStyle = options.fill;
            context.fillRect(options.left, options.top, options.width, options.heigth);
            context.strokeRect(options.left, options.top, options.width, options.heigth);
        }
    },
    drawOptions: 
    {
        left: 10,
        top: 10,
        width: 100,
        heigth: 100,
        stroke: 'black',
        fill: 'silver',
        clear: false
    }
}


_KSM.draw();
_KSM.draw(530, 370);
_KSM.draw(100, 100, 440, 280, 'red');
_KSM.draw(120, 120, 400, 240, 'red', 'yellow');
_KSM.draw(270, undefined, undefined, undefined, undefined, 'green');
_KSM.draw({stroke: 'red', left: 140, top: 450, heigth: 20, width: 360});
_KSM.drawOptions.stroke = '#44F';
_KSM.draw({clear: true});
_KSM.draw(530, 370);


