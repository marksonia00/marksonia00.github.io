var db = firebase.database();
const app = new Vue({
    el: '#app',
    data: {
      firstName: '',
      lastName: '',
      email: '',
      Grade: 1,
      gender: '',
      referrals: [],
      lecture1:'',
      lecture2:'',
      lecture3:'',
      lecture4:'',
      specialRequests: '',
      purchaseAgreementSigned: false,
      requiredFieldClass:'required'
    },
    computed: {
      fullName: {
        get: function() {
          if (this.firstName && this.lastName) {
            return this.firstName + ' ' + this.lastName;
          } else {
            return this.firstName || this.lastName;
          }
        },
        set: function(newFullName) {
          const names = newFullName.split(' ');
  
          if (names.length === 2) {
            this.firstName = names[0];
            this.lastName = names[1];
          }
          
          if (names.length <= 1) {
            this.firstName = names[0] || '';
            this.lastName = '';
          }
        }
      },
      ticketDescription: function() {
        let readableTicketType = 'General Admission';
        if (this.ticketType === 'vip') {
          readableTicketType = 'VIP';
        }
  
        let ticketPluralization = 'tickets';
        if (this.ticketQuantity === 1) {
          ticketPluralization = 'ticket';
        }
  
        return this.ticketQuantity + ' ' + readableTicketType + ' ' + ticketPluralization;
      },
      emailIsValid: function() {
        return this.email.includes('@');
      },
      formIsValid: function() {
        return this.firstName && this.lastName && this.emailIsValid;
      },
      submitButtonStyles: function() {
        if (this.formIsValid) {
          return {
            'background-color': '#4c7ef3',
            cursor: 'pointer'
          }
        } else {
          return {
            'background-color': 'gray',
            cursor: 'default'
          }
        }
      },
      touchedEmailStyles: function(){
        if (this.email) {
      return {
        'border-color': '#bdbcbc',
        'border-width': '2px'
      }
    } else {
      return {
        'border-color': '#e0e0e0',
        'border-width': '2px'
      }
    }
      },
      invalidEmailStyles:function(){
        if (this.email && !this.emailIsValid) {
      return {
        'background-color': '#ffeded',
        'border-color': '#da5252'
      }
    }
      },
      emailClasses:function() {
        return {
         touched: this.email.length !== 0,
         invalid: this.email && !this.emailIsValid
        };
      }
    },
    watch: {
      specialRequests: function(newRequests, oldRequests) {
        if (newRequests.toLowerCase().includes('reset') || 
            newRequests.toLowerCase().includes('reset')) {
          this.ticketType = '';
        }
      }
    },
    methods: {
      resetFields: function() {
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.referrals = [];
        this.specialRequests = '';
        this.purchaseAgreementSigned = false;
      },
      submitForm: function(){
        db.ref('/Survey').push({
          firstName:this.firstName,
          lastName:this.lastName,
          email:this.email,
          Grade:this.Grade,
          lecture1:this.lecture1,
          lecture2:this.lecture2,
          lecture3:this.lecture3,
          lecture4:this.lecture4
        })
      }
    }
  });