function sendMessage(){
 const input=document.getElementById('messageInput');
 const text=input.value.trim();
 if(!text) return;
 const messages=document.getElementById('messages');
 const msg=document.createElement('div');
 msg.className='message sent';
 msg.textContent=text;
 messages.appendChild(msg);
 input.value='';
 messages.scrollTop=messages.scrollHeight;

 setTimeout(()=>{
   const reply=document.createElement('div');
   reply.className='message received';
   reply.textContent='Auto reply: '+text;
   messages.appendChild(reply);
   messages.scrollTop=messages.scrollHeight;
 },1000);
}
document.getElementById('messageInput').addEventListener('keypress',e=>{
 if(e.key==='Enter') sendMessage();
});
