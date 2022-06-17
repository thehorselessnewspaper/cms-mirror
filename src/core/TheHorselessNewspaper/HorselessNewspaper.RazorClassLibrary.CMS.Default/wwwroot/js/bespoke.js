

    $.ajaxSetup({
        'headers': {
            'viewPhysicalPath': 'streaming',
            'parentContentCollectionObjectId': 'xxsds',
        }
    }
    );

    $.ajax({
        url: "/phantom/api/dynamicviewserver/getdynamicview",
    headers: {
        viewPhysicalPath: "streaming",
    parentContentCollectionObjectId: "xxsds",
    Accept: "text/html; application/json"
        }
    }).done(function(data) {
        $('dynamicView').html(data);
    });

    $(document).ready(function() {

        $("#button1").click(function () {
            $("#dynamicView").load("/phantom/api/dynamicviewserver/getdynamicview");
        });

    });
