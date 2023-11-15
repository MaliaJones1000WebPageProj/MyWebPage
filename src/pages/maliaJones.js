import MiddlewarePlugin from "next/dist/build/webpack/plugins/middleware-plugin";
export default function examplePage() {
    return (
      <div className='container'>

        <title>MaliasPage</title>
        <main>

            <h1>This is Malia Jones</h1>
            <div className="row">
                <div className="col">
                    <img src="mjPics/portrait1"></img>
                    <img src="mjPics/portrait2"></img>
                    <img src="mjPics/outdoors"></img>
                    <img src="mjPics/fish"></img>
                </div>
            </div>
            <p>Hi there, this is the page for Malia Jones! More info will be put here in the future; just conducting tests for now.</p>


          <a className='button' href='/'>
            <p> Back to Home Page</p>
          </a>

        </main>

        <style jsx>{`
        .row{
            display: flex;
            flex-wrap: wrap;
            padding: 0 4px;
        }
        .col {
            flex: 50%;
            padding: 0 4px;
        }
        .col img{
            margin-top: 8px;
            vertical-align = middle;
        }`}

    </style>

    <script>
        {/* var elements = document.getElementsByClassName("col");
        for (i = 0; i < elements.length; i++){
            elements[i].style.flex = "50%";
        } */}
    </script>

      </div>
    );
}
