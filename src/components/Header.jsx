import logoImg from '../assets/logo.jpg';


export default function Header() {

  return (
    <header>
      <img src={logoImg} alt="A form and a pencil" />
      <h4>React Forms</h4>
      <div style={{display:'flex', justifyContent:'center',gap:'10px'}} >
       <div style={{marginRight:"5px"}}><a href='/login'  >login</a> </div> 
       <div><a href='/login-1' >login-1</a> </div> 
       <div><a href='/login-2' >login-2</a> </div>
       <div><a href='/login-3' >useRef</a> </div>
       <div><a href='/login-4' >FormData</a> </div>
       <div><a href='/login-5' >Multiple</a> </div>
      </div>
    </header>
  );
}
