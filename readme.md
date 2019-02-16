<h1> Uygulamanın Çalışması için yüklenmesi gerekenler </h1>
<hr>

<ul>
  <li> Python </li>
  <li> Django </li>
  <li> React </li>
  <li> pip3 </li>
  <li> Django Rest Framework </li>
  <li> Axios </li>
</ul>

<hr>
<p>
  Python'u https://www.python.org/downloads/ buradan en güncel sürümü indiririz.İndirdikten sonra python dosyalarında 'Scripts' isimli
  dosyaya geliriz ve içinde <code> pip install django </code> komutu veririz.React için ise komut satırına <code> npm install create-react-app </code>
  komutunu veririz.
</p>

<p> 
  Pip3 python 3 ile birlikte gelen bir kütüphanedir.Script kütüphanesinde bulunur.Script kütüphanesinde komut penceresi açılır ve  <code>pip3 install djangorestframework </code> ve <code>pip install django-filter </code> komutu verilir.
  'frontend' dosyasına herhangibir react uygulamasının 'node_modules' dosyası atılır çünkü büyük bir dosya olduğu için githuba atamadım.Axiosu yüklemek için ise 'frontend' dosyasında <code>npm install axios </code> komutu verilir.
</p>

<h1> Uygulamanın Açılması </h1>
<p>
  İlk olarak djangoyu açmak için indirilen dosyanın içinde <code>python.exe manage.py runserver </code> komutu verilir.Ardından ise 'frontend' dosyası içinde <code>yarn start</code> komutu verilir.Ve site localhost:3000 'de çalışır hale gelmiş olmalıdır.
</p>
