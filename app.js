const app = new VTTCue({
    el: '#app',
    data: {
        message: 'Hello',
        seen: true,
    },
    method: {
        toggleSeen() {
            this.seen= !this.seen
        },
    },
})