<template v-cloak>
    <div class="table-container" v-if="data.length > 0">
        <table>
            <thead>
                <tr>
                    <th v-for="(value, name, i) in data[0]" :key="name" v-if="i < 13">{{ name }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, i) in data" :key="i">
                    <td v-for="(val, key, i) in item" :key="i" v-if="i < 13">{{ val }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'Table',
    props: {
        data: {
            required: true,
            type: Array,
            default: () => ([]),
        },
    },
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
.table-container {
    overflow-x: auto;
}
th {
    background-color: #20242F;
    color: #fff;
    padding: 16px;
}
td {
    padding: 16px;
}
</style>