import lodash from "lodash"
export default {
    init() {
        setInterval(this.getMonitorInfo, this.mointorTimes)

    },
    getMonitorInfo() {
        this.monitorInfo.forEach(item => {
            if (item.show && item.interval && typeof item.get === "function") {
                item.get(item)
            }
        })
    }
}