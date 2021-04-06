({
    doInit : function(component, event, helper) {
        var action = component.get("c.getFieldNames");
        console.log('action'+JSON.stringify(action));
        action.setParams({
            "sObjectName" : component.get("v.objectName")           
        });
        var vlstSkills = [];
        action.setCallback(this, function(response) {
            if (response.getState() == "SUCCESS") {
                var options = response.getReturnValue();
                console.log('options------------'+JSON.stringify(options));
          // "label": options[i].toUpperCase(),
                       // "fieldLabel": options[i].toUpperCase()
                 for(var key in options){
                    vlstSkills.push({
                        "value":options[key], key:key,
                        "label":options[key], value:key
                    });
                }
                component.set("v.options",vlstSkills );
                // component.set("v.values", "v.options" );
                console.log('vlstSkills------------'+JSON.stringify(vlstSkills));
            }else{
                alert('Error.');
            }
            
        });
        $A.enqueueAction(action);
        
    },
    
    handleChange: function (component, event, helper) {
        var SelectedFields = event.getParam("value");
        //console.log(selectedValues);
        component.set("v.SelectedFields", SelectedFields);
        //alert("Option selected with value: '" + selectedValues + "'");
        //console.log('SelectedFields'+SelectedFields);
    },
    getSelected : function(component, event, helper){
       var optionlist = component.get("v.options"); 
        var SelectedFields = event.getParam("value");
        //var value = event.getSource().get("v.SelectedFields");
        console.log('value-------'+JSON.stringify(optionlist));
        //var myAttri = component.find("FieldList").get("v.value");
        var selectedValues = component.get("v.SelectedFields");
        console.log('Selectd -' + selectedValues);
    }
})
