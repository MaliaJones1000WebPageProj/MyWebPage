// import MiddlewarePlugin from "next/dist/build/webpack/plugins/middleware-plugin";
export default function examplePage() {
    return (
      <div className='container'>

        <title>MaliasPage</title>
        <main>

            <h1 className="h1">This is Malia Jones</h1>
                <div className="row">
                    <img src="https://i.postimg.cc/HLMd5Pb4/portrait1.jpg"></img>
                    <img src="https://i.postimg.cc/9QKcDjwQ/portrait2.webp"></img>
                    <img src="https://i.postimg.cc/tJhhG22p/outdoors.jpg"></img>
                    <img src="https://i.postimg.cc/7h7NYxYv/fish.jpg"></img>
                </div>
            <p className="p1">Hi there, this is the page for Malia Jones! More info will be put here in the future; just conducting tests for now.</p>


          <a className='button' href='/'>
            <p> Back to Home Page</p>
          </a>

        </main>

        <style jsx>{`
        .row{
            flex-wrap: wrap;
            padding: 0 4px;
        }
        .col {
            flex: 50%;
            padding: 0 4px;
            
        }
        .row img{
            margin-top: 8px;
            vertical-align = middle;
            border-radius: 8px;
            max-width: 25%;
            height: auto;
            margin-left: 25%;
            margin-right: 75%;
        }
        .h1{
            font-family: "Courier New", monospace;
              text-align: center;
        }
        .p1{
            font-family: "Verdana", sans-serif;
        }
        .button{
            font-family: "Verdana", sans-serif;
            text-align: center;
        }
        
        
        `}

    </style>

    <script>
        {/*var elements = maliaJones.getElementsByClassName("col");
        var i;
        for (i = 0; i < elements.length; i++){
            elements[i].style.flex = "50%";
        }*/}
    </script>

      </div>
    );
}
