<template v-cloak>
    <div class="column-control">
        <h3 class="title">Table view</h3>
        <h4 class="sub-title">Show columns</h4>
        <ul v-if="info && info.length > 0">
            <li v-for="(value, name, i) in info[0]" :key="name">
                <input type="checkbox" :id="name">
                <label :for="name"><span>{{ name }}</span></label>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'ColumnControl',
    components: {

    },
    data() {
        return {
            test: 'Table view',
        };
    },
    computed: {
        tab() {
            return this.$store.state.tab;
        },
        info() {
            return this.$store.state.data[this.tab.toLowerCase()].results;
        }
    },
    created() {

    },
    methods: {

    },
};
</script>

<style lang="scss" scoped>
.column-control {
    display: flex;
    flex-direction: column;
    background-color: #313745;
    color: #fff;
    padding: 20px;
    width: 290px;
}
li {
    border-bottom: 1px solid rgba(0,0,0,.15);
    padding-top: 8px;
    padding-bottom: 8px;
}
label span {
    display: inline-block;
    &::first-letter {
        text-transform: uppercase;
    }
}
</style>