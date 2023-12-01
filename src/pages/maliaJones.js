// import MiddlewarePlugin from "next/dist/build/webpack/plugins/middleware-plugin";
export default function examplePage() {
    return (
      <div className='container'>

        <title>MaliasPage</title>
        <main>

            <h1 className="h1">Malia Jones</h1>
                <div className="row">
                <div className="col">
                    <img src="https://i.postimg.cc/HLMd5Pb4/portrait1.jpg"></img>
                    <img src="https://i.postimg.cc/tJhhG22p/outdoors.jpg"></img>
                </div>
                <div className="col">
                    <img src="https://i.postimg.cc/7h7NYxYv/fish.jpg"></img>
                    <img src="https://i.postimg.cc/9QKcDjwQ/portrait2.webp"></img>
                </div>
                </div>
            <div className="txtblock">
                <p className="p1">Hi there, my name is Malia Jones! I'm a freshman at CU Boulder majoring in computer science, and minoring in ATLS. I love sports and adventure, including playing soccer, running, rock climbing, hiking, and just being outdoors! I'm also a very artsy and creative person, and love to create art traditionally & digitally as well as 2D & 3D animation. I'm also an animal lover, and I adore cats, dogs, ducks, and raccoons :).</p>
                <div className="p1">
                <p>Here are the places you can learn more about me and my work:</p>
                <ul>
                    <li><a href="www.linkedin.com/in/maliajones">LinkedIn</a></li>
                    <li><a href="https://github.com/MaliaJones">GitHub</a></li>
                    <li><a href="https://www.youtube.com/@maliajonesanimation4477">YouTube</a></li>
                </ul>
                </div>
            </div>

          <a className='button' href='/'>
            <p>Back to Home Page</p>
          </a>

        </main>

        <style jsx>{`
        .row{
            display: flex;
            flex-wrap: wrap;
            padding: 0 4px;
            align-items: center;
            justify-content: center;
        }
        .col {
            flex: 25%;
            max-width: 25%;
            padding: 0 4px;
            
        }
        .col img{
            margin-top: 8px;
            vertical-align = middle;
            border-radius: 8px;
            width: 100%;
        }
        .h1{
            font-family: "Courier New", monospace;
            text-align: center;
            font-size: 40px;

        }
        .p1{
            font-family: "Verdana", sans-serif;
            text-align: center;
            border: 3px;
            border-style: solid;
            border-radius: 8px;
            border-color: #3763ad;
            background-color: #d3f0ee;
            padding: 20px;
            margin-left: 80px;
            margin-right: 80px;

        }
        .txtblock{

        }

        .button {
            /* margin: .5rem; */
            font-family: "Verdana", sans-serif;
            flex-basis: 45%;
            padding: 0.5rem;
            text-align: center;
            color: inherit;
            text-decoration: none;
            border: 1px solid #eaeaea;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
          }

          .button:hover,
          .button:focus,
          .button:active {
            color: #0070f3;
            border-color: #0070f3;
          }

          .button p {
            font-size: 1rem;
            font-weight: 600;
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
