Parse.Cloud.beforeSave("Monster", function (request, response) {
    var obj = request.object;
    if(!obj.get("email")){
        response.error("duplicate email");
    }else {
        response.success();
    }
});
