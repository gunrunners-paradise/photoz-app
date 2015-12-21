Template.photos.helpers({
    Photos: function() {
        return Photos.find();
    }
});

Template.addphotos.events({
    "submit .addphotoform": function() {
        var file = $("#myphoto").get(0).files[0];
        if(file) {
            fsFile = new FS.File(file);
            Photos.insert(fsFile, function(err, result) {
                if (err) {console.log(err);}
                toastr.success("File Uploaded");
                Router.go("/");
            })
        } else {
            toastr.error("File not uploaded");
            Router.go("/add");
        }
        return false;
    }
});
