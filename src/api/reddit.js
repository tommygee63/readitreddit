export async function fetchPosts(subreddit) {
    try{
        const response = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
        if(response.ok) {
            const jsonResponse = await response.json();  
            console.log(jsonResponse.data.children);
            return jsonResponse.data.children;
        }
    }catch(error) {
        console.log(error);
    }
};


export async function fetchComments(permalink) {
    try{
        const response = await  fetch(`https://www.reddit.com` + permalink + '.json');

        if(response.ok){
            const jsonResponse = await response.json();
            //console.log(jsonResponse[1].data.children);
            return jsonResponse[1].data.children
        }
    } catch(error) {
        console.log(error)
    }
};

export async function fetchSubreddits() {
    try {
        const response = await fetch('https://www.reddit.com/subreddits.json');
        if(response.ok) {
            const jsonResponse = await response.json();
            //console.log(jsonResponse.data.children);
            return jsonResponse.data.children;
        }
    } catch (error) {
        console.log(error);
    };
};