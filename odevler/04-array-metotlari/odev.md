- Array-of-objects

1. forEach ile diziyi baştan sona gez, her eleman için bir şey yap. Kullanıcıların adını tek tek console'a bas. return'ü yok, yeni dizi döndürmez aklında olsun.
2. map ile her elemanı dönüştür, yeni bir dizi döndürür (orijinali bozmaz). Kullanıcı dizisinden sadece adların olduğu yeni bir dizi çıkar. C#'taki Select gibi, kıyasla.
3. filter ile koşula uyan elemanları süz, yeni dizi döndürür. 18 yaş üstü kullanıcıları ayrı bir diziye al. C#'taki Where.
4. find ve findIndex ile koşula uyan ilk elemanı (find) ya da onun index'ini (findIndex) bulur. Adı "Eray" olan kullanıcıyı bul. filter'dan farkı ne, üstünde dur (biri tek eleman, biri dizi döndürür).
5. some ve every ile dizide en az biri koşula uyuyor mu (some), hepsi uyuyor mu (every) — true/false döndürür. "18'den küçük kimse var mı?" ve "herkes 18+ mı?" sorularını kodla cevapla.
6. sort ile diziyi sırala. Tuzak: parametresiz sort() her şeyi string gibi sıralar (10 ile 2'yi yanlış sıralar), nedenini araştır. Sayı sıralamak için (a, b) => a - b yazman gerekir. Kullanıcıları yaşa göre küçükten büyüğe sırala. Ayrıca: sort orijinal diziyi değiştirir, map/filter değiştirmez — bunu bizzat test et.
7. reduce ile diziyi tek bir değere "indir" (topla/biriktir). En güçlü ve en zoru, acele etme. Kullanıcıların yaş toplamını, sonra yaş ortalamasını reduce ile hesapla. C#'taki Aggregate gibi.
8. Değiştiren mi, yeni döndüren mi? Bu haftanın en önemli kavramı bu. Hangi metotlar orijinal diziyi bozuyor (push, splice, sort...), hangileri dokunmadan yeni dizi döndürüyor (map, filter...) kısa bir liste çıkar ve her birini kendin test ederek doğrula.