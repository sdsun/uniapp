import { mapState } from 'vuex'
const userMixin = {
  computed: {
    ...mapState(['userInfo'])
  }
}

export default userMixin