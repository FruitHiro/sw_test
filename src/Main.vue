<template v-cloak>
    <div class="main-container">
        <Sidenav />
        <div class="main">
            <Header />
            <Table :data="starships" />
        </div>
        <Column-control />
    </div>
</template>

<script>
import Sidenav from './Sidenav.vue';
import Header from './Header.vue';
import Table from './Table.vue';
import ColumnControl from './ColumnControl.vue';

export default {
    name: 'Main',
    components: {
        Sidenav,
        Header,
        Table,
        ColumnControl,
    },
    data() {
        return {
            test: 'Text',
        };
    },
    computed: {
        starships() {
            return this.$store.state.data.starships.results;
        }
    },
    created() {

    },
    methods: {

    },
};
</script>

<style lang="scss" scoped>
.main-container {
    display: flex;
    height: 100%;
}
.main {
    display: flex;
    flex-direction: column;
    width: calc(100% - 420px);
}
</style>