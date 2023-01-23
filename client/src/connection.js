
export async function postData(url, data) {
    try {
        await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ number: parseFloat(data) })
        });
    } catch (error) {
        console.error('Error:', error);
        throw error;
    } finally {
        console.log('Request completed.');
    }
}


export async function getData(url){
    try {
        const response = await fetch(url);
        const json = await response.json();
        return json;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    } finally {
        console.log('Request completed.');
    }
}

