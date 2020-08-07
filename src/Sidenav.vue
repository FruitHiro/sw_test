<template v-cloak>
    <div class="sidenav">
        <div class="">
            <img src="img/image.svg" alt="image">
        </div>
        <ul>
            <li class="title">Starships</li>
            <li class="title">Planets</li>
            <li class="title">People</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Sidenav',
    components: {

    },
    data() {
        return {
            test: 'Text',
        };
    },
    computed: {

    },
    created() {

    },
    methods: {

    },
};
</script>

<style lang="scss" scoped>
.sidenav {
    display: flex;
    flex-direction: column;
    background-color: #313745;
    color: #fff;
    width: 130px;
}
li {
    padding: 14px;
    border-bottom: 1px solid #1F242F;

    &.active,
    &:hover {
        background-color: #272D3B;
    }
}
</style>