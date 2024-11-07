import Profile from "./components/Profile"

export default function App(){
  return(
    <body>
      <div>
      <Profile
      img={'./ana.jpeg'}
      name={'Ana Luiza'} 
      bio={'Técnica em Desenvolvimento de sistemas'} 
      phone={'+ 55 (85) 992302408'}
      email={'analuizab0508@gmail.com'} 
      instaUrl={'https://www.instagram.com/analuiza___ofc1'}
      githubUrl={'https://github.com/analuizab3?tab=repositories'}
      ></Profile>
      </div>
    </body> 
  )
}