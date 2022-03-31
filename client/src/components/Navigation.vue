<template>
    <div class="nav">
        <div class="nav-list">
            <span v-for="post in posts">
            {{ post.title }}
        </span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            posts: [
                {
                    title: 'bai 1'
                },
                {
                    title: 'bai 2'
                },
                {
                    title: 'bai 3'
                },
                {
                    title: 'bai 4'
                },
                {
                    title: 'bai 5'
                },
                {
                    title: 'bai 6'
                }                
            ]
        }

    }
}
</script>

<style>

    .nav, ul{
        margin: 0;
        padding: 5px;
        background-color: rgb(168, 233, 65);
    }

    .list {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        font-size: 1.3rem;
    }

        .list li {
            color: black;
        }

        .list li > a{
            color:  black;
            text-decoration: none;
        }


</style>