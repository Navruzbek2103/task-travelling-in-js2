var user = prompt("Ismingizni kiriting...");




var dollar = 9433.34; // dollar
var euro = 10354.03; // euro
var rubl = 147.44; // rubl
var frank = 9553.83; // frank
var lira = 1594.71; // lira
var tenge = 24.17; // tenge
var somon = 9.81; // somon



var summa = 0;

var expenses = (dollar * (500 + 250)) + (euro * 120);

// user = Number(user);


if(user && !Number(user)){

  var country = prompt("Xurmatli " + user + ", qayerga sayohat qilmoqchisiz?");

  if (country && !Number(country)){

    var money = prompt(user + ' ' + country + "ga borishlik uchun sizda qancha mablag' bor?");

    if(money && Number(money)){

      var currency = prompt("Siz kiritgan mablag' qaysi pul birligiga oid? (quyidagi raqamlardan birini tanlang) \n 1 - $ dollar \n 2 - yevro \n 3 - rubl \n 4 - frank \n 5 - lira \n 6 - tenge \n 7 - somon \n 8 - bu yerda men tanlamoqchi bo'lgan variyant yo'q");

      if (currency == 1){
        summa = money * dollar;
        if(summa > expenses){
          alert("Qadrli " + user + ", jami mablag'ingiz " + summa + "so'm. \nSafar xarajatlari esa " + expenses + "so'm. \n \nSiz bemalol sayohatingizni boshlashingiz mumkin!")
        }
        else if(summa == expenses){
          alert("Hmmm. Siz kiritgan mablag' miqdori roppa-rossa xarajatlar bilan teng keldi");
        }
        else if(summa < expenses){
          alert("Afsus, mablag'ingiz yetmadi!");
        }
        else{
          alert("Kutilmagan xatolik bor!")
        }
      }

      else if (currency == 2){
        summa = money * euro;
        if(summa > expenses){
          alert("Qadrli " + user + ", jami mablag'ingiz " + summa + "so'm. \nSafar xarajatlari esa " + expenses + "so'm. \n \nSiz bemalol sayohatingizni boshlashingiz mumkin!")
        }
        else if(summa == expenses){
          alert("Hmmm. Siz kiritgan mablag' miqdori roppa-rossa xarajatlar bilan teng keldi");
        }
        else if(summa < expenses){
          alert("Afsus, mablag'ingiz yetmadi!");
        }
        else{
          alert("Kutilmagan xatolik bor!")
        }
      }

      else if (currency == 3){
        summa = money * rubl;
        if(summa > expenses){
          alert("Qadrli " + user + ", jami mablag'ingiz " + summa + "so'm. \nSafar xarajatlari esa " + expenses + "so'm. \n \nSiz bemalol sayohatingizni boshlashingiz mumkin!")
        }
        else if(summa == expenses){
          alert("Hmmm. Siz kiritgan mablag' miqdori roppa-rossa xarajatlar bilan teng keldi");
        }
        else if(summa < expenses){
          alert("Afsus, mablag'ingiz yetmadi!");
        }
        else{
          alert("Kutilmagan xatolik bor!")
        }
      }

      else if (currency == 4){
        summa = money * frank;
        if(summa > expenses){
          alert("Qadrli " + user + ", jami mablag'ingiz " + summa + "so'm. \nSafar xarajatlari esa " + expenses + "so'm. \n \nSiz bemalol sayohatingizni boshlashingiz mumkin!")
        }
        else if(summa == expenses){
          alert("Hmmm. Siz kiritgan mablag' miqdori roppa-rossa xarajatlar bilan teng keldi");
        }
        else if(summa < expenses){
          alert("Afsus, mablag'ingiz yetmadi!");
        }
        else{
          alert("Kutilmagan xatolik bor!")
        }
      }

      else if (currency == 5){
        summa = money * lira;
        if(summa > expenses){
          alert("Qadrli " + user + ", jami mablag'ingiz " + summa + "so'm. \nSafar xarajatlari esa " + expenses + "so'm. \n \nSiz bemalol sayohatingizni boshlashingiz mumkin!")
        }
        else if(summa == expenses){
          alert("Hmmm. Siz kiritgan mablag' miqdori roppa-rossa xarajatlar bilan teng keldi");
        }
        else if(summa < expenses){
          alert("Afsus, mablag'ingiz yetmadi!");
        }
        else{
          alert("Kutilmagan xatolik bor!")
        }
      }

      else if (currency == 6){
        summa = money * tenge;
        if(summa > expenses){
          alert("Qadrli " + user + ", jami mablag'ingiz " + summa + "so'm. \nSafar xarajatlari esa " + expenses + "so'm. \n \nSiz bemalol sayohatingizni boshlashingiz mumkin!")
        }
        else if(summa == expenses){
          alert("Hmmm. Siz kiritgan mablag' miqdori roppa-rossa xarajatlar bilan teng keldi");
        }
        else if(summa < expenses){
          alert("Afsus, mablag'ingiz yetmadi!");
        }
        else{
          alert("Kutilmagan xatolik bor!")
        }
      }

      else if (currency == 7){
        summa = money * somon;
        if(summa > expenses){
          alert("Qadrli " + user + ", jami mablag'ingiz " + summa + "so'm. \nSafar xarajatlari esa " + expenses + "so'm. \n \nSiz bemalol sayohatingizni boshlashingiz mumkin!")
        }
        else if(summa == expenses){
          alert("Hmmm. Siz kiritgan mablag' miqdori roppa-rossa xarajatlar bilan teng keldi");
        }
        else if(summa < expenses){
          alert("Afsus, mablag'ingiz yetmadi!");
        }
        else{
          alert("Kutilmagan xatolik bor!")
        }
      }

      else if (currency == 8){
        summa = money * dollar;
        if(summa > expenses){
          alert("Qadrli " + user + ", biz siz tanlamoqchi bo'lgan pul birligini bila olmadik. Shuning uchun siz kiritgan qiymatni AQSH dollarida hisoblab qo'ya qoldik. \njami mablag'ingiz " + summa + "so'm. \nSafar xarajatlari esa " + expenses + "so'm. \n \nSiz bemalol sayohatingizni boshlashingiz mumkin!")
        }
        else if(summa == expenses){
          alert("Hmmm. Siz kiritgan mablag' miqdori roppa-rossa xarajatlar bilan teng keldi");
        }
        else if(summa < expenses){
          alert("Afsus, mablag'ingiz yetmadi!");
        }
        else{
          alert("Kutilmagan xatolik bor!")
        }
      }
      else{
        alert("Bunday qiymat mavjud emas! Ma'lumotlarni qaytadan kiriting...")
      }

    }
    else{
      alert("Mablag' noto'g'ri usulda kiritildi, yoki, umuman, kiritilmadi. Iltimos qaytadan kiriting...")

    }
  }
  else{
    alert("Joy nomini noto'g'ri kiritildi, yoki, umuman, kiritilmadi. Iltimos qaytadan kiriting...")
  }
}
else{
  alert("Ism noto'g'ri kiritildi, yoki, umuman, kiritilmadi. Iltimos qaytadan kiriting...")
}
