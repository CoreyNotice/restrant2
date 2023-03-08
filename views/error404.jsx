const React=require('react')
const Def=require('./default')

function error404() {
  return (

    <Def><main>

      <img src="/images/404pic.jpg" alt="404" width="100%" height="100%" margin="auto"/>
         
    </main>
    </Def>
  )
}

module.exports=error404