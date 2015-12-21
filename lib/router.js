Router.configure({
    layoutTemplate: "layout"
});

Router.map(function() {
    this.route("photos", {
        path: "/",
        template: "photos"
    });

    this.route("addphotos", {
        path: "/add",
        template: "addphotos"
    });

    Router.map(function() {
        this.route("photo", {
            path: "/photos/:_id",
            template: "photo",
            data: function() {
                templateData = {
                    photo: Photos.findOne({_id: this.params._id})
                }
                return templateData;
            }
        });
    });
});
