<template v-cloak>
    <div class="column-control">
        <div class="title">{{ test }}</div>
    </div>
</template>

<script>
export default {
    name: 'ColumnControl',
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
.column-control {
    display: flex;
    flex-direction: column;
    background-color: #313745;
    color: #fff;
    padding: 20px;
    width: 290px;
}
</style>