/*!
  * eAlert v1.0
  * Copyright 2019-2019 Eddy Godwin Udom
  * Licensed under MIT
  */

var ealert = new function() {

    this.class_name = 'ealert';
    this.position = 'bottom left';
    this.container_class_name = 'ealert_container';
    this.duration = 3000;
    this.id = 'ealert-'+Math.floor((Math.random() * 100) + Math.random());

    this.fire = function (type, message) {

        this.main_class = this.class_name +" "+type;

        // container
        var div = document.createElement("div");
        div.setAttribute('class', this.container_class_name);


        document.body.appendChild(div);

        // alert div
        var alert_div = document.createElement("div");
        alert_div.setAttribute('class', this.main_class +" "+this.position);
        alert_div.id = this.id;

        div.append(alert_div);

        // icon
        var icon_div = document.createElement("div");
        icon_div.setAttribute('class', 'icon');

        alert_div.append(icon_div);

        // message
        var message_div = document.createElement("div");
        message_div.setAttribute('class', 'message');
        message_div.innerHTML = message;

        alert_div.append(message_div);

        setTimeout(function(){


                alert_div.classList.add('ealert_hide');


            setTimeout(function(){
                document.body.removeChild(div);
            }, 1000);

            }, this.duration);
    };
};