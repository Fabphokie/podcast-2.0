import { useState, useEffect } from "react";

export default function UseFetch(url) {

    const [data, setData] = useState([]);
    const [errorStatus, setErrorStatus] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        fetch(url)

            .then((response) => {

                if (!response.ok) {

                    throw response.status
                }

                return response.json()
            })

            .then((data) => setData(data))

            .catch((e) => {

                setErrorStatus(e)
            })

            .finally(() => setLoading(false));

    }, [url]);

    return [data, errorStatus, loading];
}

export default function SignUp(props) {

    const [datas, setDatas] = useState(null)

    useEffect(() => {

        if (props.idno) {

            fetch(`https://podcast-api.netlify.app/id/${props.idno}`)
                .then(response => response.json())
                .then(data => {

                    const bb = data.seasons

                    const cc = bb.map((pp) => {

                        return (



                            <h1>{pp.title}</h1>

                        )

                    })

                    setDatas(cc)
                })
        }
    }, [props.idno])

    return (
        <div>
            {datas}
        </div>
    )


}
