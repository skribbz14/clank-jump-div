/*
//
/// Clank Jump Div 
/// version 0.1 */

(function(){ 'use strict';

 
  /*
  //
  /// Definition */
  
  angular.module('clankJumpDiv', [])
   .directive('clankJumpDiv', ['$window', function($window){
     return{
       restrict:'E',
       link:function(scope, elem, attr){
          
          
        /*
        //
        /// Variables */
        
        /// Create the jumpdiv object
        var jumpdiv = {
          name                : attr.id,
          target              : undefined
        };        
       
        /// Set the target
        jumpdiv.target = angular.element('[jump-to-div="'+jumpdiv.name+'"]');
        


        /*
        //
        /// Functions */
        
        function Set_Active_Status(){          
          if(attr.active === undefined){
            attr.$set('active', 'false');
          }
          else if(attr.active !== 'false'){
            attr.$set('active', 'false');  
          }
        }
        
        function Set_Jumpdiv_Class(){
          if(attr.class === undefined){
            elem[0].className = 'clank_jump_div';
          }
          else if(attr.class.indexOf('clank_jump_div') === -1){
            elem[0].className += ' clank_jump_div';
          }          
        }
        
        function Swap_Elements(obj1, obj2) {
            // create marker element and insert it where obj1 is
            var temp = document.createElement('div');
            obj1.parentNode.insertBefore(temp, obj1);
        
            // move obj1 to right before obj2
            obj2.parentNode.insertBefore(obj1, obj2);
        
            // move obj2 to right before where obj1 used to be
            temp.parentNode.insertBefore(obj2, temp);
        
            // remove temporary marker node
            temp.parentNode.removeChild(temp);
        }              
        
        function In_Desktop_Mode(window_width, window_height, jumpdiv){          
          if(window_width > attr.jumpWidth && window_height > attr.jumpHeight) return true;
          else return false;
        }
        
        function In_Mobile_Mode(window_width, window_height, jumpdiv){
          if(window_width <= attr.jumpWidth || window_height <= attr.jumpHeight) return true;
          else return false;
        }
        
        function Make_Jump(attr, jumpdiv, active_status){
          
          /// Mark the jumpdiv as active
          attr.$set('active', active_status);
          
          
          /// Move the target to the jumpdiv.                
          Swap_Elements(elem[0], jumpdiv.target[0]);          
        }   
        
        function Jump_Test(current_window, jumpdiv){
          
          
          /// Get the window height and width
          var window_height = current_window.innerHeight,
              window_width  = current_window.innerWidth;
                        
          
          /// Do not test if the attributes is not set
          if(attr.jumpWidth === null && attr.jumpHeight === null) return;
          

          /// Check the jumpdiv's status to run the proper check
          switch(attr.active){
            case 'false':
              
              /// If in desktop mode
              if(In_Desktop_Mode(window_width, window_height, jumpdiv)) {
                           
                /// Make the jump                  
                Make_Jump(attr, jumpdiv, 'true');                                 
              }                
              break;
              
            case 'true':
            
              /// If in mobile mode
              if(In_Mobile_Mode(window_width, window_height, jumpdiv)) {
                
                /// Make the jump
                Make_Jump(attr, jumpdiv, 'false');
              }
              break;
            default:break;
          }                                                               
        }
        
        

        /*
        //
        /// Run */               
        
        angular.element($window).bind({
          
          'load':function(e){
          
          
            /// Ensure that the css class is set
            Set_Jumpdiv_Class();
            
            
            /// Set the active status
            Set_Active_Status();
                      
            
            /// Run Jump Test
            Jump_Test(this, jumpdiv);               
          },
          
          'resize':function(e){
            
            /// Run Jump Test
            Jump_Test(this, jumpdiv);              
          }
        });
       }
     };
   }]);
})();

