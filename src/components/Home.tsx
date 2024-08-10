
function Home() {


    return (
        <>
            {Array.from({length: 400}).map((_, index) => (
                <div>
                    <p>Test {index}</p>
                    <br/>
                </div>
            ))}

        </>
    )


}

export default Home;
