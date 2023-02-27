let ladder = {
    step: 0,
    up() {
      this.step++;
      return;
    },

    down() {
      this.step--;
      return;
    },
    
    showStep() {
      console.log( this.step );
      return;
    }
  };
  //возвращать результат при каждом вызове