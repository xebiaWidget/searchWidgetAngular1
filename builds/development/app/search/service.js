/* for the demo purpose I am taking as JSON. this can be HTTP request */

searchModule.factory('policyData', function () {

    return {
        policies: [
            {
                "clientName": "Ann Liebmann",
                "phone": "27-61-433-544",
                "email": "ann.liebmann@test.com",
                "policyNo": "0013983997 | 0013656887"
        },
            {
                "clientName": "Ann Summer",
                "phone": "27-61-422-549",
                "email": "ann.summer@test.com",
                "policyNo": "0013999887 | 0013987111"
        },
            {
                "clientName": "Ann Samuel",
                "phone": "27-61-411-547",
                "email": "ann.samuel@test.com",
                "policyNo": "0013676887 | 0013987222"
        },
            {
                "clientName": "Mohd Sahil",
                "phone": "27-61-411-656",
                "email": "mohd.sahil@test.com",
                "policyNo": "0013673333 | 0013983334"
        }
        ]

    }

})
