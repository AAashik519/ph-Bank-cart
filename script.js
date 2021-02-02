// ******login button event handeler****


var logInButton =document.getElementById("login");
logInButton.addEventListener("click",function(){
  const loginArea =  document.getElementById( "login-area").style.display = "none";
  document.getElementById("transaction-area").style.display="block";
}
)

 
// *******deposit button event handeler****
 
    
  var depositBtn =document.getElementById("addDeposit");
  depositBtn.addEventListener("click",function(){  
    
    var ammountNumber= getInputNumber("depositAmmount");

 
     UpdateBalanceText("currentDeposit",ammountNumber);
     UpdateBalanceText("depositBalance",ammountNumber);
     document.getElementById("depositAmmount").value=" ";
  }
  )

  //withdraw button handler

  var addWithdraw= document.getElementById("addWithdraw");
  addWithdraw.addEventListener("click",function(){
 
    var withdrawAmmountNumber= getInputNumber("withdrawAmmount");
    UpdateBalanceText( "currentWithdraw",withdrawAmmountNumber);
    UpdateBalanceText( "depositBalance", -1 * withdrawAmmountNumber);


    document.getElementById("withdrawAmmount").value=" ";
    
  })

function getInputNumber(id){
  var withdrawAmmount= document.getElementById(id).value;
  var withdrawAmmountNumber= parseFloat(withdrawAmmount);
  return withdrawAmmountNumber;
  
}
 
 
  function UpdateBalanceText(id,ammountNumber){
    var Balance=document.getElementById(id).innerText;
    var currentBalance= parseFloat(Balance);
    var totallBalancce = currentBalance+ammountNumber;
    document.getElementById(id).innerText= totallBalancce;
  }