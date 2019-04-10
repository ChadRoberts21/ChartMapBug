<template>
    <div v-if="showWidget">
        <div><span>Name:</span> {{marker.name}} </div>
        <div><span>Lat:</span> {{marker.lat}} </div>
        <div><span>Long:</span> {{marker.long}} </div>
        <div><span>color:</span> {{marker.colour}} </div>
        <div><span>pointInterval:</span> {{marker.interval}} </div>
        <div><span>pointStart:</span> {{marker.startPoint}} </div>
        <div>
            <highcharts :options="chartOptions"></highcharts>
        </div>
    </div>
</template>

<script>
export default {
    name: "MarkerWidget",
    props: {
        marker: Object
    },
    computed: {
        chartOptions() {
            return {
                chart: {
                    height: 150,
                    borderWidth: 2
                },
                title: {
                    text: null
                },
                subtitle: {
                    text: null
                },
                yAxis: {
                    labels: {
                    enabled: false
                    },
                    title: {
                    text: ""
                    },
                    min: 0,
                    gridLineWidth: 0
                },
                xAxis: {
                    labels: {
                    enabled: false
                    },
                    title: {
                    text: ""
                    },
                    tickLength: 0
                },
                exporting: {
                    enabled: false
                },
                credits: {
                    enabled: false
                },
                series: [
                    {
                    showInLegend: false,
                    type: "column",
                    color: this.marker.colour,
                    data: this.marker.data,
                    pointInterval: this.marker.interval,
                    pointStart: this.marker.startPoint,
                    gapSize: 4,
                    tooltip: {
                        valueDecimals: 2
                    },
                    fillColor: {
                        linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                        }
                    },
                    threshold: null
                    }
                ]
                };
        },
        showWidget() {
            return this.marker !== null && this.marker !== undefined
        }
    }
}
</script>
