const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>ReSt-RaNt</h1>
                <div class="">
                  <img src="/images/hotdog.jpg" alt="hotdog" width="25%" height="25%" margin="auto"/>
                </div>
             
            </main>
        </Def>
    )
}

module.exports = home
