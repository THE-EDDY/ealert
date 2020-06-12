/*!
  * eAlert v1.0
  * Copyright 2019-2019 Eddy Godwin Udom
  * Licensed under MIT
  */

let ealert = new function() {

    // fixed
    let class_name = 'ealert',
        id = 'ealert-'+Math.floor((Math.random() * 100) + Math.random()),
        container_class_name = 'ealert_container';

    //customizable
    this.position = 'top right';
    this.duration = 3000;
    this.appearance = 'default'; // default, modern

    // fire function
    this.fire = function (type, message) {

        let main_class = class_name +" "+type;

        // container
        let div = document.createElement("div");
        div.setAttribute('class', container_class_name );


        document.body.appendChild(div);

        // alert div
        let alert_div = document.createElement("div");
        alert_div.setAttribute('class', main_class +" "+ this.appearance +" "+this.position);
        alert_div.id = id;

        div.append(alert_div);

        // icon
        let icon_div = document.createElement("div");
        icon_div.setAttribute('class', 'icon');

        alert_div.append(icon_div);

        // message
        let message_div = document.createElement("div");
        message_div.setAttribute('class', 'message');
        message_div.innerHTML = message;

        alert_div.append(message_div);


        // slide-out alert
        setTimeout(function(){


            alert_div.classList.add('ealert_hide');

            // destroy alert
            setTimeout(function(){
                document.body.removeChild(div);
            }, 1000);

        }, this.duration);
    };
};