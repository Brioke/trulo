async function initializePlayer(id, url, drmKey, enableCustomConfig) {
    const video = document.getElementById(id);
    const ui = video['ui'];
    const controls = ui.getControls();
    const player = controls.getPlayer();    
    const config = {
        'controlPanelElements': ['time_and_duration','playback_rate','mute','spacer','captions','language' ,'quality','fullscreen'],
        'playbackRates': [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2],
        'seekBarColors': {base: 'rgba(255,255,255,.2)', buffered: 'rgba(255,255,255,.4)', played: 'rgb(255,0,0)'} };
    ui.configure(config);
    player.configure({drm: {clearKeys: drmKey}});
    window.player = player;
    window.ui = ui;
    player.addEventListener('error', onPlayerErrorEvent);
    controls.addEventListener('error', onUIErrorEvent);
   if (enableCustomConfig) {
        player.configure('manifest.dash.ignoreMinBufferTime', true);
        player.configure('streaming.rebufferingGoal', 3 /* second */);
   }
    try {
        await player.load(url);
        console.log('The video has now been loaded!');
    } catch (error) {
        onPlayerError(error);
    }
}

function onPlayerErrorEvent(errorEvent) {
    onPlayerError(errorEvent.detail);
}

function onPlayerError(error) {
    console.error('Error code', error.code, 'object', error);
}

function onUIErrorEvent(errorEvent) {
    onPlayerError(errorEvent.detail);
}

document.addEventListener('shaka-ui-loaded', function() {
    initializePlayer('ssc1', 'https://ssc-1-enc.edgenextcdn.net/out/v1/c696e4819b55414388a1a487e8a45ca1/index.mpd', {'d84c325f36814f39bbe59080272b10c3': '550727de4c96ef1ecff874905493580f'});
    initializePlayer('ssc2', 'https://ssc-2-enc.edgenextcdn.net/out/v1/a16db2ec338a445a82d9c541cc9293f9/index.mpd', {'8bcfc55359e24bd7ad1c5560a96ddd3c': 'b5dcf721ab522af92a9d3bf0bd55b596'});
    initializePlayer('ssc3', 'https://ssc-3-enc.edgenextcdn.net/out/v1/42e86125555242aaa2a12056832e7814/index.mpd', {'7de5dd08ad8041d586c2f16ccc9490a1': '5e1503f3398b34f5099933fedab847ef'});
    initializePlayer('ssc4', 'https://ssc-4-enc.edgenextcdn.net/out/v1/5267ea5772874b0db24559d643eaad93/index.mpd', {'5c672f6b85a94638872d0214f7806ed4': 'bf8756fbb866ee2d5c701c2289dd8de3'});
    initializePlayer('ssc5', 'https://ssc-5-enc.edgenextcdn.net/out/v1/99289eac5a7b4319905da595afbd792b/index.mpd', {'c88b512b17ab4f6cb09eb0ff4a1056ed': 'adc08ee1c20a734972a55c9aebbd1888'});
    
initializePlayer('ssc_extra1', 'https://ssc-extra-1-enc.edgenextcdn.net/out/v1/647c58693f1d46af92bd7e69f17912cb/index.mpd', {'ecbc9e6fe6b145efb6658fb5cf7427f8': '03c17e28911f71221acbc0b11f900401'});

initializePlayer('ssc_extra2', 'https://ssc-extra-2-enc.edgenextcdn.net/out/v1/8b70de2b70d447ba8a7450ba90926a2d/index.mpd', {'4d89249bd4ca4ebc9e70443265f9507d': 'cf074ffd2646c9c2f8513b47fa57bc30'});

initializePlayer('ssc_extra3', 'https://ssc-extra-2-enc.edgenextcdn.net/out/v1/8f1c6c3f05ef4284a64b342891bd85ae/index.mpd', {'98cfd6fd4812497fb24dc75f7545f2ee': 'd3006ee69e77b25939728ebf30d3180a'});

initializePlayer('unifis1', 'https://pop5clustera00de07172379a62d6189.hypp.tv/PLTV/88888888/224/3221227877/3221227877.mpd?rrsip=web.hypp.tv:443&zoneoffset=0&servicetype=1&icpid=&accounttype=1&limitflux=-1&limitdur=-1&accountinfo=pDVeBhPtc549NayvHFA0JHqiwYJ%2FKEP6UdMtjXIjIzrjYyGN4h5HPUHLEk%2FvL80xPjG9KTt82xXCdpGInMoKWMBLe9Ie9rQgSTZ%2FmsUArMht5J0dsgfU28LWZM15p3G2%3A20221124103114%3AUTC%2C10001002142071%2C115.164.56.153%2C20221124103114%2Curn:Huawei:liveTV:XTV54185493%2C10001002142071%2C-1%2C0%2C1%2C%2C%2C2%2CHESA0002%2C%2C%2C2%2C10000104188313%2C0%2C10000103564441%2C798506651%2C%2C%2C2%2C1%2CEND&GuardEncType=2&tenantId=6003&from=5&ocs=2_1.9.62.168_80&hms_devid=1785&mag_hms=1785,1793,1786,1788&it=H4sIAAAAAAAAA0XMQQvCIBiA4X_jUdTPJjt4KoIuEqy6xqd-ycBN0jXo38ci6P4-71Ix0OlgwQtjAoAG2mlJvqe-wwCx0xCVNoE1erpigQXMeZyTK3Fjt2F_l4ILrpTkUrHLtjtmTFZ9S_eaPNU_G6iuYyAb24Ov2DimVCnhMpaZnzO-rzX_kg9sQKxomQAAAA', {'cbb673fb120882354735ed57eeb05b4c': 'fe003f7aeec40eb65d20b14edfda2a86'});

initializePlayer('spotv1my', 'https://pop5clustera00de07172379a62d6189.hypp.tv/PLTV/88888888/224/3221227608/3221227608.mpd?rrsip=web.hypp.tv:443&zoneoffset=0&servicetype=1&icpid=&accounttype=1&limitflux=-1&limitdur=-1&accountinfo=U0v281lovZMLWzqtXjPtYuOXwQCoIQRk449J%2BBUCcawWP5a6lzyDPJ57LXeuC05Cs44sM6v4Pb96oLcepTGODErcymHBIhx5oJP4jv2fPK0%3D%3A20230206101724%3AUTC%2C1003663983%2C115.164.187.20%2C20230206101724%2Curn:Huawei:liveTV:XTV100000161%2C1003663983%2C-1%2C0%2C1%2C%2C%2C2%2C593%2C%2C%2C2%2C1343117%2C0%2C248412%2C47562943%2C%2C%2C2%2C1%2CEND&GuardEncType=2&it=H4sIAAAAAAAAADWOy27CMBRE_8ZLK3YehIVXIKRKVahE6Laa2NcmihODHZD695A2bGfmjM4coeljr1B2dV7Zqsu1LeoS2EhRk611tu2MFYYlujVBSabhfT-5JpgF-z7tfkTGMy6l4EKydrk7eLh12dzHjqLK39iJ4qPXpEyy_IHE4Vwkh7kPE__y-D1Hv04YtauaqDZltc0KKQuZs3lJW6Th1bAL0i6MV0Qyn8H9AcrCJ2JX6AGOGoykprv3_9wxmpfNEzpVq7L0AAAA&tenantId=6001', {'7de0fa3c35f52f8a8517f1600dd11ed7': '2d59cf94d10020aeee01a97cd0716eea'});

initializePlayer('spotv2my', 'https://pop5clustera00de07172379a62d6189.hypp.tv/PLTV/88888888/224/3221227726/3221227726.mpd?rrsip=web.hypp.tv:443&zoneoffset=0&servicetype=1&icpid=&accounttype=1&limitflux=-1&limitdur=-1&accountinfo=U0v281lovZMLWzqtXjPtYuOXwQCoIQRk449J%2BBUCcawRjfkMvdAX9TZ5I%2BbsmfrUeOV6Zn1IaYCsVySN%2F6aTU0rcymHBIhx5oJP4jv2fPK0%3D%3A20230206102855%3AUTC%2C1003663983%2C115.164.187.20%2C20230206102855%2Curn:Huawei:liveTV:XTV100000162%2C1003663983%2C-1%2C0%2C1%2C%2C%2C2%2C593%2C%2C%2C2%2C1343117%2C0%2C248412%2C47562943%2C%2C%2C2%2C1%2CEND&GuardEncType=2&it=H4sIAAAAAAAAADWOwY6CMBiE36bHpi0I9tCTGxOTDbuJrFczhZ9KLNRt0cS3X1D2NpmZbzJTREOHD5PZwoqt0IXSXZ7JEnqWCp2WFhtlBUv0WwWjWAPv-9FVoV2w03F3loILrpTkUrF6mdt7uLVZ3QdL0WT_2JHio2_ItKnjDyQO5yI5TH0Y-bfH8yf6tcKoXq_JotwUWuSlyvOSTYtbI13nhF2QdmG4IVL7GdwLMB18InZDc4WjCgOZ8e79m_uK7fzmD_CkDoH0AAAA&tenantId=6001', {'7c67cb7de9465062c06ac94e8e065462': '5931fc07f285ffe40eb98e130bb090f9'});

initializePlayer('bein4my', 'https://pop5clustera00de07172379a62d6189.hypp.tv/PLTV/88888888/224/3221227937/3221227937.mpd?rrsip=web.hypp.tv:443&zoneoffset=0&servicetype=1&icpid=&accounttype=1&limitflux=-1&limitdur=-1&accountinfo=U0v281lovZMLWzqtXjPtYuOXwQCoIQRk449J%2BBUCcawRjfkMvdAX9TZ5I%2BbsmfrU7%2B8kYXzOcpo3wc%2BwgB1By0rcymHBIhx5oJP4jv2fPK0%3D%3A20230206102855%3AUTC%2C1003663983%2C115.164.187.20%2C20230206102855%2Curn:Huawei:liveTV:XTV57682031%2C1003663983%2C-1%2C0%2C1%2C%2C%2C2%2C593%2C%2C%2C2%2C1343117%2C0%2C248412%2C47562943%2C%2C%2C2%2C1%2CEND&GuardEncType=2&it=H4sIAAAAAAAAADWOwY6CMBRF_6bLpn10wC660piYTHASGbfmUR6VWKi2QDJ_P6K4vfeemzNGtHTYGRKbPMu0shsAVdu2FlDkYNtMo4RaS5boUQYDzKL33eDK0CzY-bS9SMEFB5BcAquWu71Hty7Lqa8pmuyDnSjOnSXTpJbPmDg6F8nh2IWB_3j8-41-nTCqVjWZF1-5FqoApTQbl7TCdHs27IppG_o7Rmq-g3sBpkWfiN3R3tBRiT2ZYfL-zR1j87T5B0NkEFD0AAAA&tenantId=6001', {'94663e64ef81e90a9deeb0f1993ce11c': '9d6f78876677b543cd4e18c846aa2481'});

initializePlayer('bein3my', 'https://pop5clustera00de07172379a62d6189.hypp.tv/PLTV/88888888/224/3221227892/3221227892.mpd?rrsip=web.hypp.tv:443&zoneoffset=0&servicetype=1&icpid=&accounttype=1&limitflux=-1&limitdur=-1&accountinfo=U0v281lovZMLWzqtXjPtYuOXwQCoIQRk449J%2BBUCcawRjfkMvdAX9TZ5I%2BbsmfrUDhVRD65aYf%2BjyDsSSHpLfkrcymHBIhx5oJP4jv2fPK0%3D%3A20230206102855%3AUTC%2C1003663983%2C115.164.187.20%2C20230206102855%2Curn:Huawei:liveTV:XTV55456355%2C1003663983%2C-1%2C0%2C1%2C%2C%2C2%2C593%2C%2C%2C2%2C1343117%2C0%2C248412%2C47562943%2C%2C%2C2%2C1%2CEND&GuardEncType=2&it=H4sIAAAAAAAAADWOwQ6CMBBE_6bHhpYCeuhJY2Ji0AT0atbtUomFagsm_r2ieJ2ZN3lDAKTtWjeXQmUyRcpypVCYJaIiVAmmgFlDgkV6lF5LhuBc29vSmwk7VauzSHjCpRRcSFZPdxsHdl6WY3ehoNM_VlF4tkjaxIY_IXKwNpCFofU9Pzh4HYObJ4zqWU3kRZYvE1VIpRZsmNIa4u3TsCvEle_uEMjsvP0CugEXid0Bb2CphI50Pzr34_bBfGzeA19EPPQAAAA&tenantId=6001', {'0d2418cc6a29a3516d1854ab2973f25f': '4979b73603b430465aa4e7bbdefbc4cc'});

initializePlayer('bein2my', 'https://pop5clustera00de07172379a62d6189.hypp.tv/PLTV/88888888/224/3221227971/3221227971.mpd?rrsip=web.hypp.tv:443&zoneoffset=0&servicetype=1&icpid=&accounttype=1&limitflux=-1&limitdur=-1&accountinfo=U0v281lovZMLWzqtXjPtYuOXwQCoIQRk449J%2BBUCcawgQY43Tg5eLk6%2BKHkOBbkVv%2FaciHRqnNnDuZfWMEk6l0rcymHBIhx5oJP4jv2fPK0%3D%3A20230206101746%3AUTC%2C1003663983%2C115.164.187.20%2C20230206101746%2Curn:Huawei:liveTV:XTV59922231%2C1003663983%2C-1%2C0%2C1%2C%2C%2C2%2C593%2C%2C%2C2%2C1343117%2C0%2C248412%2C47562943%2C%2C%2C2%2C1%2CEND&GuardEncType=2&it=H4sIAAAAAAAAADWPQU-EMBSE_02PDX2LUA49rdnExKDJolcztI9KttC1ZTfx3wuKc3wz38vMkmD56dEMKEB1rQlDX6raNWh6TfqAinRflVZk_mqjIWERwjj7NroNez8fP1QhC0mkpCLRbe9OAX5Ptrep52QO_9iZ0320bFwe5B1ZwvvEHssYZ_ka8P2Wwh4R3O3VVFU_VE1RriItlu3aIV9WR3wiH-N0RWL3HP0vsC4JmcUV9gLPLSY28y2EP-4lubXND5_xMYT0AAAA&tenantId=6001', {'1c983e5a03b0f8adde686ef20497e2b4': 'f7b1d6556850b472f4f683519f4e41f7'});

initializePlayer('bein1my2', 'https://pop5clustera00de07172379a62d6189.hypp.tv/PLTV/88888888/224/3221227927/3221227927.mpd?rrsip=web.hypp.tv:443&zoneoffset=0&servicetype=1&icpid=&accounttype=1&limitflux=-1&limitdur=-1&accountinfo=U0v281lovZMLWzqtXjPtYuOXwQCoIQRk449J%2BBUCcawgQY43Tg5eLk6%2BKHkOBbkVIq%2FzwD5xYAe8dI3PltEQ%2BUrcymHBIhx5oJP4jv2fPK0%3D%3A20230206101746%3AUTC%2C1003663983%2C115.164.187.20%2C20230206101746%2Curn:Huawei:liveTV:XTV55456338%2C1003663983%2C-1%2C0%2C1%2C%2C%2C2%2C593%2C%2C%2C2%2C1343117%2C0%2C248412%2C47562943%2C%2C%2C2%2C1%2CEND&GuardEncType=2&it=H4sIAAAAAAAAADWOQY_CIBSE_w1HApSqPXByY2Jiqol1r-YBD2xKi0I18d_brt25vZn5XmZMYHD_o4oNc9pVVsvSSF45raWoDCvEdBQlSpLxUUcliIEQ2sHX0c7Y73l75YwyKgSnXJBmfrcL4Jdm_ew1JlX8Y2dMr9agstnRF2QK3if0MLZxoKcA70sKS4Vgs0zjq3W5qpicJNZknN0Gcjcl5AZ5G_s7JLSH6P8A5SBkJHcwHXisoUc1PEP4csdkpzUfwVvnv_QAAAA&tenantId=6001', {'8e5c88c1ad411ce4aa1fcd3e63fa9448': 'fb4e6d3c2a444c3711477438bcc0b5fc'});

//BEIN INDONESIA

initializePlayer('beinid3', 'https://bein-apac-live.akamaized.net/bein/indo_bein_sports_03/indo_bein_sports_03.isml/playlist.mpd?hdnts=st=-62135596800~exp=1712565319~acl=/*~id=VID_NsuHBGULQokzC0SxhzlEtv6xosAE~hmac=9285a502d1cdf9a109ccadb80ef1e0e33a02cd938ae6b3ee49764f490c2204d9', {'d887254c10f866f65427c4f651b71c7c':'231a9d9b02041e9ed576afaffb6b8356'}, true);

initializePlayer('beinsea2', 'https://bein-apac-live.akamaized.net/bein/sea_bein_sports_02/sea_bein_sports_02.isml/playlist.mpd?hdnts=st=-62135596800~exp=1712565319~acl=/*~id=VID_NsuHBGULQokzC0SxhzlEtv6xosAE~hmac=9285a502d1cdf9a109ccadb80ef1e0e33a02cd938ae6b3ee49764f490c2204d9', {'40dbb569b90b5c7798f63ed6d7577ccb':'4ea09395289d3c2e633f24f07c180169'}, true);

initializePlayer('beinid1', 'https://bein-apac-live.akamaized.net/bein/indo_bein_sports_01/indo_bein_sports_01.isml/playlist.mpd?hdnts=st=-62135596800~exp=1712565319~acl=/*~id=VID_NsuHBGULQokzC0SxhzlEtv6xosAE~hmac=9285a502d1cdf9a109ccadb80ef1e0e33a02cd938ae6b3ee49764f490c2204d9', {'9b364399ebb9a118f63b048fae023341':'7bb6fd9b5e2db5941b2734ced0a7c495'}, true);

    
//MATCH RUSIA*/
initializePlayer('match_football1', 'https://strm.yandex.ru/kal/match_football1_hd/manifest.mpd', {'5269ab07e6a6db7585324ae20542f191': 'dba0dccffba1b26f658ec85a616102e8'});

initializePlayer('match_football2', 'https://strm.yandex.ru/kal/match_football2_hd/manifest.mpd', {'56f7dcb5d20eeed212ff58620acb8931': '76e139c0676ed2d7ae46392ce6fd9e89'});

initializePlayer('match_football3', 'https://strm.yandex.ru/kal/match_football3_hd/manifest.mpd', {'b356d2c5bd7b4a71e99485906f6beeed': 'f2e7cb0fcdfb6a3fc0299eed50d29c97'});
    
initializePlayer('match_arena', 'https://video.beeline.tv/live/d/channel512.isml/manifest-stb.mpd', {'9839b170b4fc384f243bffd8929b71a2':'34cdd6f3e1bf6a9f9d54e9165abf8c09'});


//TSN CANADA
initializePlayer('tsn1', 'https://live-ctv.video.9c9media.com/f/TSN/TSN1/manifest.mpd', {'dea83ced0141424e983e1afe463b4b0d': 'c00dd5dd17b0799aa4013f365a1393ce'});

initializePlayer('tsn2', 'https://live-ctv.video.9c9media.com/f/TSN/TSN2/manifest.mpd', {'ddc52c88e2c24d38a5bc8dda8a2acb61': 'ad5ea485464a13eec7dda3249c556446'});

initializePlayer('tsn3', 'https://live-ctv.video.9c9media.com/f/TSN/TSN3/manifest.mpd', {'c0f378ad54e14a9c85a3d8c986d2a51f': '5e1d040743ff78715e464ffb905e68a9'});

initializePlayer('tsn4', 'https://live-ctv.video.9c9media.com/f/TSN/TSN4/manifest.mpd', {'f0a2efd11e0643c3a45d6f67d02f1a97': '85bf4469003bd28f01ea4fefedd5a431'});

initializePlayer('tsn5', 'https://live-ctv.video.9c9media.com/f/TSN/TSN5/manifest.mpd', {'cb57741a1cee422690c6294a06eb1320': '7a0cfd493df6ef7cc0d0bb3ad95cec8c'});



initializePlayer('tnt1uk50', 'https://live.ll.ww.aiv-cdn.net/OTTB/lhr-nitro/live/clients/dash/enc/wf8usag51e/out/v1/bd3b0c314fff4bb1ab4693358f3cd2d3/cenc.mpd', {'ae26845bd33038a9c0774a0981007294':'63ac662dde310cfb4cc6f9b43b34196d'}, true);

initializePlayer('tnt2uk50', 'https://live.ll.ww.aiv-cdn.net/OTTB/lhr-nitro/live/clients/dash/enc/f0qvkrra8j/out/v1/f8fa17f087564f51aa4d5c700be43ec4/cenc.mpd', {'6d1708b185c6c4d7b37600520c7cc93c': '1aace05f58d8edef9697fd52cb09f441'}, true);

initializePlayer('tnt3uk50', 'https://live.ll.ww.aiv-cdn.net/OTTB/lhr-nitro/live/clients/dash/enc/lsdasbvglv/out/v1/bb548a3626cd4708afbb94a58d71dce9/cenc.mpd', {'4e993aa8c1f295f8b94e8e9e6f6d0bfe': '86a1ed6e96caab8eb1009fe530d2cf4f'}, true);

initializePlayer('tnt4uk50', 'https://live.ll.ww.aiv-cdn.net/OTTB/lhr-nitro/live/clients/dash/enc/i2pcjr4pe5/out/v1/912e9db56d75403b8a9ac0a719110f36/cenc.mpd', {'e31a5a81caff5d07ea2411a571fc2e59': '96c5ef69479732ae734f962748c19729'}, true);

initializePlayer('tnt5uk50', 'https://live.ll.ww.aiv-cdn.net/OTTB/lhr-nitro/live/clients/dash/enc/gesdwrdncn/out/v1/79e752f1eccd4e18b6a8904a0bc01f2d/cenc.mpd', {'60c0d9b41475e01db4ffb91ed557fbcc': '36ee40e58948ca15e3caba8d47b8f34b'}, true);

//initializePlayer('tnt1uk50', 'https://linear001-ie-dash1-prd-ak.cdn.skycdp.com/016a/Content/DASH_003_720_120/Live/channel(tntsport1)/manifest_720.mpd', {'00051ad8db73a944abe9ec83ad88987b':'100c985696718d923c4b1289c1cf0d7d'});

//initializePlayer('tnt2uk50', 'https://linear014-ie-dash1-prd-ak.cdn.skycdp.com/016a/Content/DASH_003_720_120/Live/channel(tntsport2)/manifest_720.mpd', {'00050654545edbcf400de7c11a3ace78':'7fc6cab788206f4b2c10fe5225def411'});
 
  //initializePlayer('tnt3uk50', 'https://linear001-ie-dash1-prd-ak.cdn.skycdp.com/016a/Content/DASH_003_720_120/Live/channel(tntsport3)/manifest_720.mpd', {'000540adbb30871d80550825b28bc4c3': '402edc50e9288aadc551bceaf347a517'});

//initializePlayer('tnt4uk50', 'https://linear014-ie-dash1-prd-ak.cdn.skycdp.com/016a/Content/DASH_003_720_120/Live/channel(tntsport4)/manifest_720.mpd', {'0005091188d73981c2bbd51bbe4a81ab': '2ee68af747c05c250b6a1c80abe57d2d'});

//skysports JERMAN 
    

initializePlayer('skymixde', 'https://cors-proxy.cooks.fyi/https://linear203-de-dash1-prd-ak.cdn12.skycdp.com/031131-50/index.mpd', {'000b5e56ea8fb86b73f7d088538607be': '1b30bf11462a64d0c06087275b5234a2'});

initializePlayer('skyplde', 'https://cors-proxy.cooks.fyi/https://linear202-de-dash1-prd-ak.cdn12.skycdp.com/036371-50/index.mpd', {'000bd7ca09c1d2ccdb12614b6a7525ed': '79ddb65f0cf9bf112c501a1d0d3a62d6'});

initializePlayer('skybundes1de', 'https://cors-proxy.cooks.fyi/https://linear205-de-dash1-prd-ak.cdn12.skycdp.com/031122-50/index.mpd', {'000b4856d9b1eb17e459f4ad4f480b7e': '1162c56a12e96ecd7afba37a3d650201'});

initializePlayer('skybundes2de', 'https://cors-proxy.cooks.fyi/https://linear204-de-dash1-prd-ak.cdn12.skycdp.com/031123-50/index.mpd', {'000b0e25c61df5358bd1c4f3f5ab90d2': 'bd346e7500fc3fbb0f1a8fd54c5b9f79'});

initializePlayer('skybundes3de', 'https://cors-proxy.cooks.fyi/https://linear203-de-dash1-prd-ak.cdn12.skycdp.com/031124-50/index.mpd', {'000b37f8448ff52016fec4c763aa1c00': '9d30e9752ed5c8526ad987a694770ab2'});



//SKYSPORTS ITALIA

initializePlayer('sky251it', 'https://linear304-it-dash1-prd-akg0.cdn13.skycdp.com/31917/FHD/skysport251/master.mpd', {'00368000eaecbeeafd84c05b3b8243af': '8f84185910e18ae0ca8a45004625a000'});

initializePlayer('sky252it', 'https://linear304-it-dash1-prd-akg0.cdn13.skycdp.com/32951/FHD/skysport252/master.mpd', {'0036c4797608fc64296d437bc6f8b790': '1689af84b23f514005f9bb854da7667f'});

initializePlayer('sky253it', 'https://linear304-it-dash1-prd-akg0.cdn13.skycdp.com/32233/FHD/skysport253/master.mpd', {'00365b169a077daac5081277c3fd0c28': 'f68ab32a552e13509a8ee1c4d96204bc'});

initializePlayer('sky254it', 'https://linear304-it-dash1-prd-akg0.cdn13.skycdp.com/31234/FHD/skysport254/master.mpd', {'00369c14c20b78aadb1ec0e3c0e74979': 'e768767e2c7238d8069887bb36aed7fa'});


initializePlayer('sky255it', 'https://linear304-it-dash1-prd-akg0.cdn13.skycdp.com/32910/FHD/skysport255/master.mpd', {'0036b781a22ebb0c20c16ac27d5d1448':'f309b94acfda720bf1ed5741489f8967'});

initializePlayer('sky256it', 'https://linear304-it-dash1-prd-akg0.cdn13.skycdp.com/31912/FHD/skysport256/master.mpd', {'00366f263859fc1cc82d2c4da6a66ef6':'754ae922d113c54349002cd9a88694a4'});

initializePlayer('sky257it', 'https://linear311-it-dash1-prd.selector.skycdn.it/016a/31775/FHD/skysport257/master.mpd', {'0036faeace9872d3ceeb8b1b63f0baa3':'dbd41ee944243307d39b7b27f16615a8'});

initializePlayer('sky258it', 'https://linear312-it-dash1-prd-ll.cdn13.skycdp.com/32772/skysport258/master.mpd', {'0036fd8ccfddba47c8b40aeff63a797c':'dfd5c9d0f4ac6f3a1bd89803399e7026'});

initializePlayer('sky259it', 'https://linear311-it-dash1-prd.selector.skycdn.it/016a/31613/skysport259/master.mpd', {'0036644f7699f43e401f88d920dc385c':'e5b0cebdc3edd7996d283041535fce9c'});

initializePlayer('skytennisit', 'https://linear304-it-dash1-prd-akg0.cdn13.skycdp.com/32559/FHD/skysporttennis/master.mpd', {'00360f4f90045f029a53a022738c2422': 'fa39fd500dc4e291801a710499634330'});


initializePlayer('skysportnba', 'https://linear301-it-dash1-prd.selector.skycdn.it/016a/31764/FHD/skysportnba/master_stereo.mpd', {'0036c4e453ae2a044f4c861ed73b560a': 'ea5626c0aa092c382ca58151b5f4b208'});

initializePlayer('skysportmotogp', 'https://linear306-it-dash1-prd.selector.skycdn.it/016a/31483/FHD/skysportmotogp/master_stereo.mpd', {'00362e9181eaa0c5f91761ade3515eb8': '52cf3c27885d58ad76aaf36d4217a984'});

initializePlayer('skysportuno', 'https://linear301-it-dash1-prd.selector.skycdn.it/016a/31023/FHD/skysportuno/master_stereo.mpd', {'00362452ed102000ccea64c311921dc2': '02f27bd6caab7633d3083b94d3958b1c'});

initializePlayer('skysportseriea', 'https://linear301-it-dash1-prd-akp1.cdn13.skycdp.com/016a/31209/FHD/skysportseriea/master_stereo.mpd', {'0036e5d0e88dfb087f1791da6150ced9': '0bc653d830837dceb13bd17169f0f8e2'});

initializePlayer('skysport24', 'https://linear301-it-dash1-prd.selector.skycdn.it/016a/31035/FHD/skysport24/master_stereo.mpd', {'003618ccd7be22b6367207ed8d64d505': '36e97f29ec5ea6126077cc040cc2ceeb'});


initializePlayer('skyf1it', 'https://skytest.starlive.workers.dev/https://linear005-gb-dash1-prd-cf.cdn.skycdp.com/016a/Content/DASH_003_720_120/Live/channel(skysportsf1)/manifest_720-120.mpd', {'0005c0635a06a943911f666abcef3923':'749cae7fc7f350be6ba7400f11150ea9'});

initializePlayer('skyarenait', 'https://linear304-it-dash1-prd-akg0.cdn13.skycdp.com/31024/FHD/skysportarena/master.mpd', {'00364ee1c777f44a74e4df12f3095503': '77dee68a39366663755beb8fa62dcc1e'});


initializePlayer('skygolfit', 'https://linear304-it-dash1-prd-akg0.cdn13.skycdp.com/32768/FHD/skysportgolf/master.mpd', {'0036a02f08506f8428164d78e3ebb6de': '8708612971e3cfa8e03698996b1a3b7f'});

initializePlayer('skymaxit', 'https://linear304-it-dash1-prd-akg0.cdn13.skycdp.com/31248/FHD/skysportmax/master.mpd', {'0036ae9248d939e4e1cd2198d2593a42': 'efc6699e1756403916b0280ea63f4c28'});


// SKYSPORTS UK

initializePlayer('skysportsf150', 'https://linear304-it-dash1-prd-akg0.cdn13.skycdp.com/31478/FHD/skysportf1/master.mpd', {'0036a96b6bbbf1828488f90e6b2ca1f4': 'd24e6ae926e88f8303b6926271ff8155'});


initializePlayer('skysportsmainevent', 'https://linear001-gb-dash1-prd-ak.cdn.skycdp.com/Content/DASH_003_720_120/Live/channel(skysportsmainevent)/manifest_720.mpd', {'00050559cd31897cd28ef1cad1857606': '32203d3d424a70258a9f676316681bea'});


initializePlayer('skysportspremierleague', 'https://linear015-gb-dash1-prd-ak.cdn.skycdp.com/Content/DASH_003_720_120/Live/channel(skysportspremierleague)/manifest_720.mpd', {'00057ef2c5dd6fa01e7275e4ce9b98a6': 'de0a1a300adbd4ba1fcd27f51d4b5364'});

//initializePlayer('skysportspremierleague', 'https://cors-proxy.pulsesoftware.com/https://optus.xyssatuu.workers.dev/4/xbtss/drm/avc/dash/scte/manifest.mpd', {'fbf70a6fc0bc4adb8bf777400ee12415':'02b39b93bdeb41329fe32d9aae7d32d5','3bf113cd185449298aee1afe8cb409fd':'02e22e0e22870fb261fd78175868c858'});
    
initializePlayer('skysports_football', 'https://linear019-gb-dash1-prd-ak.cdn.skycdp.com/016a/Content/DASH_003_720_120/Live/channel(skysportsfootball)/manifest_720-120.mpd', {'00051940357f91714b419a79af5a5f9a': 'f4e7d0c43db524393ba85fd240d9cd6e'});


    initializePlayer('sportsarena50', 'https://linear031-gb-dash1-prd-ll.cdn.skycdp.com/Content/DASH_003_720_120/Live/channel(skysportsarena)/manifest_720.mpd', {'00057b3ded07f870751d40e6d0fe116e': '12ef5b135d7ac0f6fb9018b74374586a'});
    
    initializePlayer('sportsaction50', 'https://linear034-gb-dash1-prd-ll.cdn.skycdp.com/016a/Content/DASH_003_720_120/Live/channel(skysportsaction)/manifest_720.mpd', {'00033f7dcc4fa16f91a862f6d8420902': '50cfec3c8d2bf51d41cce44f74781edf'});
    
    initializePlayer('sportsmix50', 'https://linear034-gb-dash1-prd-ll.cdn.skycdp.com/016a/Content/DASH_003_720_120/Live/channel(skysportsmix)/manifest_720.mpd', {'00051d6cdd7231b7370dcf8eb66cf618': '06f88d449edec6e4389950b0bda5cd68'});
    
    initializePlayer('skysportsgolf', 'https://linear034-gb-dash1-prd-ll.cdn.skycdp.com/016a/Content/DASH_003_720_120/Live/channel(skysportsgolf)/manifest_720.mpd', {'00059c656abb9f5e00e43ed7a1c3ffba': '070f8e3649dfbae44e552a134099e40c'});
    
    initializePlayer('skysportstennis', 'https://linear014-gb-dash1-prd-ll.cdn.skycdp.com/Content/DASH_003_720_120/Live/channel(skysportstennis)/manifest_720.mpd', {'0003c6076ebc58846b205e9bae01bf9a': '97a42ba20dd18bb2a11ecffad1d48177'});
    
    initializePlayer('skysportsracing', 'https://linear034-gb-dash1-prd-ll.cdn.skycdp.com/016a/Content/DASH_003_720_120/Live/channel(skysportsracing)/manifest_720.mpd', {'0005af625d6850439fdf3d5fbfef1554': 'e8c03559a31c59883222fc6beff9077c'});
    
//PREMIER SPORT UK
initializePlayer('premiersports150', 'https://linear001-ie-dash1-prd-ak.cdn.skycdp.com/016a/Content/DASH_003_720_120/Live/channel(premiersports1)/manifest_720.mpd', {'0005b3dba78ae0fe7a9288022d3b3736':'d2827df80dd7e9243ba6b5bbda5dfa82'});

initializePlayer('premiersports250', 'https://linear006-ie-dash1-prd-ak.cdn.skycdp.com/016a/Content/DASH_003_720_120/Live/channel(premiersports2)/manifest_720.mpd', {'0005d61a0ac86aca28176591b21ae2d9':'f87ad1430a7a38fd0ac248fc9a8389b1'});



    // CANAL+ POLANDIA
initializePlayer('canal_multisports1', 'https://cors-proxy.cooks.fyi/https://hls-m005-live-aka-canalplus.akamaized.net/live/disk/multisports1-hd/dash-fhddvr/multisports1-hd.mpd', {'ae6354088f3d4e049f9214557adab5ca':'4b468184e5e02ad9f6af0599904f7d02',
'590d93f2e2d146a889c49ac0ef094cb9':'241f064ffcb455f8a62d39a15ca18011',
'd4e8b8b438de40048d5243271c16e0ca':'d5aacc72e9b7639454a0e4012898b20b'});
    
initializePlayer('canal_multisports2', 'https://cors-proxy.cooks.fyi/https://hls-m004-live-aka-canalplus.akamaized.net/live/disk/multisports2-hd/dash-fhddvr/multisports2-hd.mpd', {'358ff065ef11423aa1f3c5d6a711deab': '34d6ee9ba60002a68d19a4cdc9ca8cef','820273e5a7fb4701b7a14004d78f3bf7':'373c494fe8acfa26b7f5c75a7c890ce0','e818b2a1ac5e4bccbef9ecbd21cd0eab':'6be8d8d34b009522cf5bf28587af9007'});

initializePlayer('canal_multisports3', 'https://cors-proxy.cooks.fyi/https://hls-m008-live-aka-canalplus.akamaized.net/live/disk/multisports3-hd/dash-fhddvr/multisports3-hd.mpd', {'d099ac53bc9c466baffb36294681d8ca':'b9b48f13fda97dcd03ad5325e7679aa8',
'35d61e47623944589ddfcd90c9b10bc4':'637b7dedc27fe2f3ab043dfae2825ee3',
'937d3d9c9fb74f43a26f31b61bda3e17':'938f5fe01b2830dc63ed07e7d39f0f6d'});

initializePlayer('canal_multisports4', 'https://cors-proxy.cooks.fyi/https://hls-m004-live-aka-canalplus.akamaized.net/live/disk/multisports4-hd/dash-fhddvr/multisports4-hd.mpd', {'365e4ec0abcb4f5aac7a16180d686fbf':'6e2dcb13d300b532f6c1ded366df08ed',
'0e9c1d560a04496faf312238433767f4':'05488a8017c33a6518bbc5e67f64131a',
'85a37fab106b4220ae650a593cf84dcf':'c282e684dbd89d459dcc3beecb433878'});

initializePlayer('canal_multisports5', 'https://cors-proxy.cooks.fyi/https://hls-m005-live-aka-canalplus.akamaized.net/live/disk/multisports5-hd/dash-fhddvr/multisports5-hd.mpd', {'bdc2b216d1a5459ab8ac0aaeea1a361b':'1ef214aced5e4342a39cb24d72e88835',
'000d2235843e4f8891aa25eea53a69ae':'e2b50fcd485446aca588f30c9023adaa',
'125c572f2e7d449fae3b313ff03318e5':'168f79861d2faf338ce9f74a278c5def'});

initializePlayer('canal_multisports6', 'https://cors-proxy.cooks.fyi/https://hls-m004-live-aka-canalplus.akamaized.net/live/disk/multisports6-hd/dash-fhddvr/multisports6-hd.mpd', {'9d8b277530b144649e36f7d31e6811a4':'103c37aa91f5e030602f97f7e0c51ea8',
'028fac22f42f4742ae2af45ec12fe675':'890c1c2ed5d994b593bd266c38cc468f',
'0b4fecdd9db54a4e98c3b65f590730e2':'b02e9f7b4e755b815cfa9c40dc040ab8'});



initializePlayer('canal_motogp', 'https://cors-proxy.cooks.fyi/https://hls-m006-live-aka-canalplus.akamaized.net/live/disk/canalplusmotogp-hd/dash-fhddvr/canalplusmotogp-hd.mpd', {'1b4f2f896fb949238dc61e4c4cbecca0': '50b72a9f48157a1651478528afa13830',
      '575d194987b04b41919d674e43cfa59b': '01ed8f02f4502f8ecf5d9be2cebd41b0'});

initializePlayer('canal_f1', 'https://cors-proxy.cooks.fyi/https://hls-m006-live-aka-canalplus.akamaized.net/live/disk/canalplusf1-hd/dash-fhddvr/canalplusf1-hd.mpd', {'f370399659f54954a80a0e53c7a87b40': 'c94fd8c303dbc9f6415ac2744ed92113',
      '482032e4d54c48698814d1995a3f452c': '692ff1301d75d6c6f756fc31197fff9a',
        '93c2893555a240598a4a0ae40eb407d5': 'ac7000a06c8c7ec0b33881d7051adc56',
      '2b3eca9093e84eb3941aec39612dc814': '97e2d3e0037b0394b3d52ad2393038d1'});

initializePlayer('canal_pl', 'https://cors-proxy.cooks.fyi/https://hls-m006-live-aka-canalplus.akamaized.net/live/disk/canalpluspremierleague-hd/dash-fhddvr/canalpluspremierleague-hd.mpd', {'1523f0db88774d858a5467e0816e2ecd': '54ed7fc70881560c6c156d552d449b96',
      '39e39fb2cf8344d0815babaf98da1249': '498fc9881e6b558c5251500c86d66f8a',
        '73d7081ebe994070be9b1c4cccccc1bf': '0463f7424bfce1efd7bc6d38a75d7f4a',
      'cf14484a4856464bbfb38384ae7f1cf2': 'a3e0b26f439ccbc11b68bc8c3c3140cf'});

initializePlayer('canal_foot', 'https://cors-proxy.cooks.fyi/https://hls-m009-live-aka-canalplus.akamaized.net/live/disk/canalplusfoot-hd/dash-fhddvr/canalplusfoot-hd.mpd', {'ff03bf2effdd4c708bae59520fa798a1':'113ab6d7390ced8992a10d4f8055e553',
'1f33c57b266d45379094893075f16b05':'537d89145c09b4cdb3d3e580ae185abd',
'd17e54c574af4ef786d13e0f33cbda4f':'db12523c869f930ddeee0812fbd24c61',
'802eeba218144adcb74f0fbba4969390':'d29400718ca382d04c7c7ad46ad678f2'});



//BEIN THAILAND

initializePlayer('beinth1', 'https://aisplay.xyssatuu.workers.dev/ais/play/origin/live/eds/S0001/DASH/S0001.mpd', {'3fd52d1e9ba4b180aec12c9295b62c0f': 'bb274e33da0c709e62c55d0cba911889'});

initializePlayer('beinth2', 'https://aisplay.xyssatuu.workers.dev/ais/play/origin/live/eds/S0002/DASH/S0002.mpd', {'30c11587a1686b72f115f34b0bf1c383': '1e3a6af2408cdd78347b722728560c3b'});

initializePlayer('beinth3', 'https://aisplay.xyssatuu.workers.dev/ais/play/origin/live/eds/S0003/DASH/S0003.mpd', {'aa724943787320593f5563048c90032d': 'a039276254f53769b040199a4eca8c2c'});

initializePlayer('beinth4', 'https://aisplay.xyssatuu.workers.dev/ais/play/origin/live/eds/S0004/DASH/S0004.mpd', {'cb419fa5f5498e2c6cbc39363248ddd7': 'b5853b51f2060025a822e62973154556'});

initializePlayer('beinth5', 'https://aisplay.xyssatuu.workers.dev/ais/play/origin/live/eds/S0005/DASH/S0005.mpd', {'3a165f923cd49e616f173fc6c341cc56': '4cb96186d69f1a63c40218812a6f6910'});

initializePlayer('beinth6', 'https://aisplay.xyssatuu.workers.dev/ais/play/origin/live/eds/S0006/DASH/S0006.mpd', {'ceac4607562049abb9d1b0309d9cd6f3': 'd396d277a364fab00d0193d25b700847'});

initializePlayer('beinth7', 'https://aisplay.xyssatuu.workers.dev/ais/play/origin/live/eds/S0007/DASH/S0007.mpd', {'94a28a75b3891e92a97efbe76f941095': '7b39cd0e318ee481b98c36a125c540fb'});


//TV4 SWEDIA

initializePlayer('tv4kanalen', 'https://cors-proxy.cooks.fyi/https://director.streaming.telia.com/tvm-packager-prod/group3/60ae4bff1522bd2d466954df/manifest.mpd', {'a9e0ecea640959c6aec904a1f34934a5': '284ea8e5fa0de4bc90c17c21148dbdea'});

initializePlayer('tv4_live_1', 'https://director.streaming.telia.com/tvm-packager-prod/group1/60896cc147a23d68775cd5c3/manifest.mpd', {'d094d1401faa5cd29cfb361274629aad': '793d3bf7e16e9300c0298fb2b3ba6f68'});

initializePlayer('tv4_live_2', 'https://director.streaming.telia.com/tvm-packager-prod/group1/60896d1247a23dae065cd5f4/manifest.mpd', {'d7a1fb185df6505fbc8b63df59c31f55': '368257ec8b55026bc42e2de5b60aa737'});

initializePlayer('tv4_live_3', 'https://director.streaming.telia.com/tvm-packager-prod/group1/60896d3547a23d6bbd5cd609/manifest.mpd', {'90397fef042351ec88035875ada6d1dd': '6edb6ccecf50362a74d647e6ea285365'});

initializePlayer('tv4_live_4', 'https://director.streaming.telia.com/tvm-packager-prod/group1/60896d5647a23d19495cd627/manifest.mpd', {'99c9c1d2eff15da09b1b64ed16a17a84': '6f7174c7e2d5e07fff7ba012e2e94956'});

initializePlayer('tv4_fotboll', 'https://director.streaming.telia.com/tvm-packager-prod/group3/60ae452e1522bdf301694494/manifest.mpd', {'c1c657aa160c5b328f1e76747534b913': '785e0773e9d534a00f4619315674ef7f'});

initializePlayer('tv4_motor', 'https://cors-proxy.cooks.fyi/https://director.streaming.telia.com/tvm-packager-prod/group1/6089c58f47a23d7ce45cf30f/manifest.mpd', {'39557d4a1ba75e168fc7b13756084b4d': 'efe8223510249dc20db097bb814feb41'});

initializePlayer('tv4_tennis', 'https://cors-proxy.cooks.fyi/https://director.streaming.telia.com/tvm-packager-prod/group2/60ae45e51522bd66f469461b/manifest.mpd', {'eb4b504ae8015e149965a48cfff9418e': 'b67881cf246e6c7ef8a3db7491c5b036'});


//DAZN SPANYOL

initializePlayer('dazn3_spain', 'https://live.ll.ww.aiv-cdn.net/OTTB/dub-nitro/live/clients/dash/enc/zy1ee5sshp/out/v1/bdcffa69fa3b4f3bb3569c9c73ee1c01/cenc.mpd', {'bad8efff688c0dbb3711e4a7114c22a3':'6ba800673b20776c0c850130d45e1920'});

initializePlayer('dazn4_spain', 'https://live.ll.ww.aiv-cdn.net/OTTB/dub-nitro/live/clients/dash/enc/up7qpwch9b/out/v1/a6d5d1a1287b4893b859c2d6ccf2c65d/cenc.mpd', {'d27104d427e4f87e75b19395a9f8796b':'723593c70e2d4c4862754398e80168f8'});

initializePlayer('dazn_laliga', 'https://live.ll.ww.aiv-cdn.net/OTTB/dub-nitro/live/clients/dash/enc/wjgklbtvhh/out/v1/659736a1e24c40e4865a80ffd75e7de7/cenc.mpd', {'43d1c3b25207ff38b22ccfe17d302367': '7b1f85f6e81059473b114c16a25c829a'});

initializePlayer('laliga_hypermotion', 'https://live.ll.ww.aiv-cdn.net/OTTB/dub-nitro/live/clients/dash/enc/tu06vubgf9/out/v1/7668f47d28e345979c072e361f3d3ce3/cenc.mpd', {'6d08b265a6639e32da7c880d5491e3d2': '0c92556ca14b95f367993710e7cfbc94'});

initializePlayer('laliga_hypermotion2', 'https://live.ll.ww.aiv-cdn.net/OTTB/dub-nitro/live/clients/dash/enc/woujvkfnmn/out/v1/141b52f08a1e4e97850219729ee48dc8/cenc.mpd', {'0b1fdeaee3ffc51e9a66cf1938d57aaf': '28e3cb88ab7b476b81ab8aa0624c4d71'});



//BRAZIL

initializePlayer('premierebr', 'https://live.ll.ww.aiv-cdn.net/OTTB/iad-nitro/live/clients/dash/enc/4zkafrcxji/out/v1/810ebca1aff0443da717da4acdeda158/cenc.mpd', {'d98239180d8380b3a1bb28d875b1ddf2':'cf836ced579257d1c76ae8809818e6c4'});

initializePlayer('premierebr2', 'https://live.ll.ww.aiv-cdn.net/OTTB/iad-nitro/live/clients/dash/enc/pgub1bh7o9/out/v1/7a59226197644bfaa2b00f488bd95288/cenc.mpd', {'fd2e8019f37211ca8b78a8b656f1b83a':'273189c214e85b43ac36298d1c422330'});

initializePlayer('premierebr3', 'https://live.ll.ww.aiv-cdn.net/OTTB/iad-nitro/live/clients/dash/enc/8ci7l7dt0d/out/v1/98fe69f2cdc041388004305e63353268/cenc.mpd', {'9547f9aead1237c8a3b1bf0a91ed9995':'534fab4541fef31921dd970c65d51848'});

initializePlayer('premierebr4', 'https://live.ll.ww.aiv-cdn.net/OTTB/iad-nitro/live/clients/dash/enc/zytzybatcd/out/v1/4e59aa00f6784bb98170741d40b33e3e/cenc.mpd', {'ce5d18ffd68650affce1985201983ab7':'397c64e42507d95e5460830918c22a98'});

initializePlayer('premierebr5', 'https://live.ll.ww.aiv-cdn.net/OTTB/iad-nitro/live/clients/dash/enc/j4y12ucrx0/out/v1/9135597c4400465e9e752dc32de587fd/cenc.mpd', {'d5a3ac0b892bfccdf352b6def9cb2764':'ac0936acc0036fad2273efaa42b1fafd'});

initializePlayer('premierebr6', 'https://live.ll.ww.aiv-cdn.net/OTTB/iad-nitro/live/clients/dash/enc/cydwktwhqj/out/v1/c6e2919fe4e04a73935691f8284a4afe/cenc.mpd', {'05cedc366ce4ec735ee4b33fcefbf01f':'475d6dd40eaba6896e02b26a6cf34d95'});

initializePlayer('premierebr7', 'https://live.ll.ww.aiv-cdn.net/OTTB/iad-nitro/live/clients/dash/enc/wczqphrl5k/out/v1/7a20b4be236a4a9484fdf5cdfcbe79d5/cenc.mpd', {'7ce96e01eee54fb77e5cc4e7b753d6b0':'184f94303d3357b9a7381ccdeee9b611'});

initializePlayer('premierebr8', 'https://live.ll.ww.aiv-cdn.net/OTTB/iad-nitro/live/clients/dash/enc/dabubydklo/out/v1/c272f10312ac4e81bcf2183509703dd1/cenc.mpd', {'7ba384f9d983c731ab1e3702c16e2faf':'f28adca4375e8a041fd22aef26440009'});


//BEIN POLANDIA
initializePlayer('canal_bein1', 'https://api-proxad.dc2.oqee.net/playlist/v1/live/966/1/live.mpd', {'9d8b1b819cfdcff845625b86cc4968f3': '480b03fe4476bc187c6a9d43ba85b9db',
      '3cf686dc4246f19bc4419c54da0f90bc': 'b40f599266c8a262ccf4a384dadce08a'});

initializePlayer('canal_bein2', 'https://api-proxad.dc2.oqee.net/playlist/v1/live/970/1/live.mpd', {'4acb9d8f845a315a259a12867b6792e4': '9c981a9a5ff8fb98149d6021b9623ab3',
      '2ebb0d359b2387256cd20c547af32af7': 'fae75139b34c7c9b8f9cd4071d80c19e',
        '6dfa1fff44813922069a78b0943ecb69': '08a7fc7b4778960b33c80e26d3413d9b',
      'be6d1e8198bf935270b2533d56bd1cfd': 'b883fbf9b652b98c530c64bc9a87c152','63c0449f720da4b7d5179f437076eadf':'e6114e36b1d1a390031e582d0b3f3a37'});

initializePlayer('canal_bein3', 'https://api-proxad.dc2.oqee.net/playlist/v1/live/971/1/live.mpd', {'4531b93e48ab9ea0297a176c515cff14': '473c228f1a579fce6e710e24b22e461f',
      '37a2874e91eedcba955ceeade5594ea6': '2a7feeb0f4717bdd812faa9daa88012d',
        '92ba92959988b3dcc683c86ce540e3a2': 'a4ba879567146a794ce2a28b902170a8',
      'b0da602b7d8e4de69a7bc3b24b3d70bc': 'b704f74b03b0be6a916b670a5da5eef9','aace08f82b2886e277e12b3565c7c745':'e4ac15509527d5f3b11b17d03354ffb0'});

initializePlayer('canal_bein4', 'https://api-proxad.dc2.oqee.net/playlist/v1/live/972/1/live.mpd', {'9bc136d8d6c860b62e0adac003e4d3d9':'ae5c9a9e504a4fe273760c80e7fe1eae',
'02ad8d8ffd80b50567796e694b7a2927':'07ce8279537ed26fe831b5343aa55969',
    'd1140f0b87723297fc1a3820d989537f':'37c78b5fbbd97216b4813e135ab2c1ea',
    'b6d0b6217c70b0f705002a070771b084':'746c02d1e6884fe2e4411624ba055528'});

initializePlayer('canal_bein5', 'https://api-proxad.dc2.oqee.net/playlist/v1/live/973/1/live.mpd', {'b0478fd26424e88fa1e6478ee35d7f08':'f5044242d8d224cae4087fd8ef654023',
'2275129f285677145e34eb8be249ae4a':'75055c6051d650c529627b1e626f530a',
    '2eb72cb8d525719cdda3e1f5cc43b342':'e0797e22865754872052015dda2905f7',
    '0ad2dbd3aefe207034f24050ebc98cd1':'0b121fe769d0b1b45a3a6bb8c40e3405'});

initializePlayer('canal_bein6', 'https://api-proxad.dc2.oqee.net/playlist/v1/live/974/1/live.mpd', {'c98631345149436c3778caeab57d97c5':'6125590eb9a0cb8c9a17dd2680000292',
        '9f899ca412e180776f885c0c214b02a0':'3f357dd3dfaf92623903ca91b88b05f4',
        '03ee66e926f6a34a1815f117bc12799c':'1dc895a43e207f02bd2fce62de5fbd3a',
        '257180b06ff9cbcdbaabc1ae37650f9e':'a00768d01bc82c2dd7e211c59addc9a6'});

initializePlayer('canal_bein7', 'https://api-proxad.dc2.oqee.net/playlist/v1/live/975/1/live.mpd', {'3fabbf841767a645ad2d85c1e099e94d':'bde635aa3028aab38d680672f88a0c7c',
        'c4c64f1414958cde07fe40cd85f2238c':'ce2887b843b7590a5ee083a4d8f667c2',
        '6de1fab48d825b39a63746d89e90a848':'2435a1110e892b7da94e79a7bd49b49c'});

initializePlayer('canal_bein8', 'https://api-proxad.dc2.oqee.net/playlist/v1/live/976/1/live.mpd', {'9f2c98006a33bbc83f7c03ef3530403b':'546b1d34b1be111c513d38fecaea99e4',
        'eb4949796839b08918bc4ebc25aceba6':'9b53a7fc07fa9051aacf8bc693b187b0',
        'd0525914e6c3e6be6fe85dcdb8a3be2f':'da1c96b903c0c252f1b1d82f2517c07e',
        '4b09dd7a5aff601212f3d498309e467c':'7ed57d36a85bba88b737693ab368330e'});

initializePlayer('canal_bein9', 'https://api-proxad.dc2.oqee.net/playlist/v1/live/977/1/live.mpd', {'4526ccd7d499b0b24011ce5adce18656':'3d2ed80cf1f5a9a4b9a7621b9e6c4e2a',
        'e2006d8a33025cd7943a5f02001781ec':'35c7b2ec27f2b37492707a8b4cd37154',
        '1a31894f0c41a0fe0c508784d0d1569b':'121164311f7b308a37e5504b717ae3d5',
        'a8d5f0e00214e3777d75b89b05daf64d':'f0371e88f6c2bf7844d69d9b9e0a52af'});

initializePlayer('canal_bein10', 'https://api-proxad.dc2.oqee.net/playlist/v1/live/978/1/live.mpd', {'ca1d0a53a606f8ffeb028f6b2477baa3':'388a61759de362dfcadef721b936d69a',
        '15dabcf1eabc8717842feb65f7152107':'7380f61795caebec26b0713bce2a4e3d',
        'f9c2a25bbabc8d3804df46418069ef07':'27ca457a2bb9751a5c1eb158474346a0',
        'c41b8b295c08307ddc1e3a22ea912772':'d925fe683ed91e5837aaa4e5147ad885'});
//VIAPLAY
initializePlayer('viaplay', 'https://viaplay.xyssatuu.workers.dev/vp/vssp/vssp.isml/index.mpd', {'d8d0506523d95fc082d6caef60e84979': '69992fd2d7b9211d41ecc2243803e87c'});

initializePlayer('viaplay1uk', 'https://viaplay.xyssatuu.workers.dev/vp/vpsports1uk/vpsports1uk.isml/index.mpd', {'4d4ace310f235981bef56897fe94e766': '06383cd4cdcc92bb3e83d8ea49245472'});



initializePlayer('viaplay2uk', 'https://viaplay.xyssatuu.workers.dev/vp/vpsports2uk/vpsports2uk.isml/index.mpd', {'6fe6d9cf50835945881cb56a38839fce': '213ad868126fd2cb352b189b07b25421'});


//V SPORT SWEDIA

initializePlayer('v_sport_premuim', 'https://cors-proxy.cooks.fyi/https://director.streaming.telia.com/tvm-packager-prod/group1/60896c3647a23d7f115cd57a/manifest.mpd', {'eab13e69793756eda77d8d71fda90d5d':'cd022e9bffa6a0d1523ee5d9fcda9ed4'});

initializePlayer('v_sport_football', 'https://cors-proxy.cooks.fyi/https://director.streaming.telia.com/tvm-packager-prod/group1/60896dfd47a23d7c065cd68c/manifest.mpd', {'ce37e20374e55be6bb4d26837af27605': '52cc532f748fcbf2b806dad4289bf84c'});

initializePlayer('v_sport_1', 'https://director.streaming.telia.com/tvm-packager-prod/group1/6089c17d47a23d76645ceaf4/manifest.mpd', {'04c5eaf62cd75f2d947ab4d621f39256':'76967598962e7a7314a2b251e9070725'});

initializePlayer('v_sport_ultra', 'https://cors-proxy.cooks.fyi/https://director.streaming.telia.com/tvm-packager-prod/group3/60b76e87baa9d5ddc9262457/manifest.mpd', {'c02b1c0a644d5aa4b7176ae585c572dc':'5a7799ea89ea65e3bac9a10684e616bc'});

initializePlayer('v_sport_extra', 'https://cors-proxy.cooks.fyi/https://director.streaming.telia.com/tvm-packager-prod/group3/60ae4f5e1522bd739f6959a1/manifest.mpd', {'bc972382f04c531983b7aab6bf642ad8': 'ddfd212680eb891b755610eac5becf85'});


//ELEVENT BELANDA
initializePlayer('elevenpro2nl', 'https://cors-proxy.cooks.fyi/https://tvvvideolive3.solocoo.tv/blueskytvvlive7dash/blueelevenproleague2nl/Manifest.mpd', {'16251e842a834570a8c5a34d45a0d64d':'b7243739698cad0d58af01f142d13eae'});

initializePlayer('elevenpro3nl', 'https://cors-proxy.cooks.fyi/https://tvvvideolive3.solocoo.tv/blueskytvvlive7dash/blueelevenproleague3nl/Manifest.mpd', {'c6455c5a1ad1484fa4029ba498659838':'4329fb08c3444a8ae9b3c477efe11002'});

initializePlayer('match4', 'https://cors-proxy.cooks.fyi/https://m7huvideolive.solocoo.tv/blueskylive2dash/bluedigisport1hu/Manifest.mpd', {'36d6377bb94b43a58af1c415ac686f4b':'82fcba8160b4f88948cd3268bb330dbf'});

// PEACOCK USA
initializePlayer('usa-east', 'https://fsly.stream.peacocktv.com/Content/CMAF_OL1-CTR-4s/Live/channel(usa-east)/master.mpd', {'882c9f5613b43b47adc70aa968a308ce': 'de534ef8914bfe62ba3cdd6bdb9e1c04'});

 initializePlayer('usa-eastx', 'https://fsly.stream.peacocktv.com/Content/CMAF_CTR-4s/Live/channel(vc1021n07j)/master.mpd', {'002046c9a49b9ab1cdb6616bec5d26c3': 'd2f92f6b7edc9a1a05d393ba0c20ef9e'});

    
initializePlayer('nbc-sports', 'https://fsly.stream.peacocktv.com/Content/CMAF_CTR-4s/Live/channel(vc122ycnuy)/master.mpd', {'0020d88a6713159839743f655c5da7de':'ba9f34226301f69a4f0f13f65a1f92ec'});

initializePlayer('peacoc-wwe', 'https://llnw.stream.peacocktv.com/Content/CMAF_CTR-4s/Live/channel(vc106wh3yw)/master.mpd', {'00208c93f4358213b52220898b962385':'8ae6063167228e350dd132d4a1573102'});

initializePlayer('peacoc-pl', 'https://fsly.stream.peacocktv.com/Content/CMAF_CTR-4s/Live/channel(vc1021n07j)/master.mpd', {'002046c9a49b9ab1cdb6616bec5d26c3': 'd2f92f6b7edc9a1a05d393ba0c20ef9e'});

initializePlayer('peacoc-nfl', 'https://cfrt.stream.peacocktv.com/Content/CMAF_CTR-4s/Live/channel(lc107a1ddy)/master.mpd', {'002007110c69a23803173b50eab05f23':'590d6e8f4ca81319f9bb29104f571990'});

initializePlayer('peacoc-golfpass', 'https://cfrt.stream.peacocktv.com/Content/CMAF_CTR-4s/Live/channel(vc124phhny)/master.mpd', {'0020212a47511b226f7cc9d030aa171b':'323c16315e1cb8d7c821facc3c1778a4'});


// SPECTRUM USA
initializePlayer('foxdeportes', 'https://cors-proxy.elfsight.com/https://linear.stvacdn.spectrum.com/LIVE/1106/dash/cenc/FXDEPHD/manifest.mpd', {'c9231d5e7a99429382e6a5c2e588e141':'ca08ab407ab9393a814d720f1f41c6cf'});

initializePlayer('wllousa', 'https://cors-proxy.elfsight.com/https://linear-novi.stvacdn.spectrum.com/LIVE/1131/dash/cenc/WLLOHD_10364/manifest.mpd', {'6653c05e42fc4fac8f49d7cbf99498fe': '3b88f2cff3affef20b265c840bafc0cc'});

initializePlayer('bein1usa', 'https://cors-proxy.elfsight.com/https://cip4-2048b75120.linear-novi.stvacdn.spectrum.com/LIVE/1144/dash/cenc/BEIN1HD_04735/manifest.mpd', {'f81af7922a8d461aa81da4b225f8f883':'d0f27c123c5f1331429d08638fa3727e'});

initializePlayer('bein2usa', 'https://cors-proxy.elfsight.com/https://cip4-2048b75120.linear-novi.stvacdn.spectrum.com/LIVE/1147/dash/cenc/BEIN2HD_04736/manifest.mpd', {'42176706e135442ab500ee8b3a32ff31':'072ea5e4b049541f4aba6f5d6bc2b3c8'});

initializePlayer('tudnusa', 'https://cors-proxy.elfsight.com/https://linear.stvacdn.spectrum.com/LIVE/1131/dash/cenc/TUDNUH_8283/manifest.mpd', {'85c8956b207c44a693d89984803c908b':'8d8ff21c464506ef396356dd761f5ccd'});

initializePlayer('espndeportes', 'https://cors-proxy.elfsight.com/https://linear.stvacdn.spectrum.com/LIVE/1166/dash/cenc/ESPNDHD_13667/manifest.mpd', {'be65e5985fa04a49af310f0a92a0260a':'1acb5ff7b0dbfdf19c4dca1aabfaaa11'});

initializePlayer('usanet', 'https://cors-proxy.elfsight.com/https://linear.stvacdn.spectrum.com/LIVE/1139/dash/cenc/USAHD_00234/manifest.mpd', {'591b46f7cc3d47819ab856f4cdcc84fe':'dd07faa621cf6d727cf4f6337e9345c0'});

//ITV UK

initializePlayer('itv1', 'https://wp2-obc1112-live-ch-prod.prod.cdn.dmdsdp.com/dash/SV09212/manifest.mpd', {'5d9937d586414096948337ac314d79c1':'22ca2e250b729982c97209e0ff3f7e9b'});

    
initializePlayer('itv4', 'https://da-3efc67452a028801000600020000000000000005.id.cdn.upcbroadband.com/wp/wp1-obc0910-live-ch-prod.prod.cdn.dmdsdp.com/dash/SV00306/manifest.mpd', {'2b169fb2c3214e429b66eb2e19fcafdf':'90a98753d8f41ad08906243230975ff1'});

initializePlayer('bbcone', 'https://da-3efc67472a028801000600020000000000000007.id.cdn.upcbroadband.com/wp/wp1-obc1112-live-ch-prod.prod.cdn.dmdsdp.com/dash/SV09091/manifest.mpd', {'6401e1fead9d4f43910aaad360f46dd0':'598f5e4f10d4e040d25579478cadc4ee'});

initializePlayer('ch4en', 'https://wp2-obc1112-live-ch-prod.prod.cdn.dmdsdp.com/dash/SV09211/manifest.mpd', {'d56ff9db826b4a41af9dbd0234c31116':'ac6eaee980dff46e15670004663132a9'});

initializePlayer('raiit', 'https://wp1-obc1112-live-ch-prod.prod.cdn.dmdsdp.com/dash/SV09101/manifest.mpd', {'d79467df269743b3aca99a9171c54878':'a7d3bc19bd09db6b581833e4a6176c8f'});

//elevenpl
initializePlayer('eleven1pl', 'https://cors-proxy.cooks.fyi/https://ec01-tpnet-waw.cdn-canalplus.pl/live/store01/11Sports1/hd2-dashdrm02/11Sports1.mpd', {'014e7cf40d9e490a812964f4aa72449e':'01b8caafb230eb2a07cc965d54ef4441',
      '9d042fa273964e24a9109e23f4e313cc':'540e3601e1b82192c76c7411ad9c8c8e',
       '801d9e39d41a49418615f7cee4b6e031':'84b9bec014f0509ee2a4296e5877cf40',
        'cf513b83f32d4234a7b4982ae9ca3161':'68293d1b7143588339baeaedbe3939d9'});



initializePlayer('eleven2pl', 'https://cors-proxy.cooks.fyi/https://ec01-tpnet-waw.cdn-canalplus.pl/live/store01/11Sports2/hd2-dashdrm02/11Sports2.mp', {'71be6f968ab54a8bb847b58bbc7c628e': '3dd907fffdbffd7ec01b4025ad97ec6a', '4e1df327c661472f96319dd7e98bf5bd': '36263f85c3c25a131f47cee90924e1f3'});

initializePlayer('eleven3pl', 'https://cors-proxy.cooks.fyi/https://ec01-tpnet-waw.cdn-canalplus.pl/live/store01/11Sports3/hd2-dashdrm02/11Sports3.mpd', {'ce125d7af48a45799d671941125ed55e': '973599517f31f3b4327fa975f549ed2b',
'55b19ea29fdd4c96825531f96a504df1': 'a6ec613e0eadfb923ff816e4c8c68a4a',
'1de6210c1b064b928c5bb003da7023e5': 'd1eb59b178c89539d7caf1022968107e'});

initializePlayer('eleven4pl', 'https://cors-proxy.cooks.fyi/https://ec01-tpnet-waw.cdn-canalplus.pl/live/store01/11Sports4/hd2-dashdrm02/11Sports4.mpd', {'2c7dea2fa563424789ea200675e56817': '5bf4b84797df5a8ac149c5bb69d639c4',
'0bc811aaa10a4c3198aa3b6679198382': '609b0c987d1657f1adc7aa53ae733200',
'a662726cb8804451961d356d65ba8450':'47f362b448bd8f63d2402d428d352aed',
'f6818e7c25964791896250a119420d85':'9f67cb00a75a9e0a068918256a227806'});

initializePlayer('polsatprem1', 'https://cors-proxy.cooks.fyi/https://ec01-tpnet-waw.cdn-canalplus.pl/live/store01/PolsatPRE1/hd2-dashdrm02/PolsatPRE1.mpd', {'7d169583d69d4ff997465fcda11743a8': 'ac55341e5a29db0966c6ddab2966a581',
    '1609061574ff4e0195ec3e98a6adc2de': 'a96022260ad6e857a731813a9b308dfe',
    '1eeecb688be04a358b48d040e5ce3e59': '986c128156ba5a01b36fdd7c10c34e0c',
    '011527347192419d94d91ed9977dc31e':'51620ff10d9582717beb8b79a6b5f860'});

initializePlayer('polsatprem2', 'https://cors-proxy.cooks.fyi/https://ec01-tpnet-waw.cdn-canalplus.pl/live/store01/PolsatPRE2/hd2-dashdrm02/PolsatPRE2.mpd', {'1b335bf3fabe44ee902c0cca04044c6d': 'b04a1a13e48b55ce793bf90453baa79e',
    'a6238a4a4a004a73aa89b313c1f54dfa': '9be91513d9b3c60cd01226a682d753fc'});

initializePlayer('cspl1', 'https://cors-proxy.cooks.fyi/https://ec01-tpnet-waw.cdn-canalplus.pl/live/store01/CplusSportHD/hd2-dashdrm02/CplusSportHD.mpd', {'4e942b1dad92436baad0c6a6901f6d13':'5adefdb3f4edd5ceee23d37c10c37e5c',
      '5fb92575d7da45219e9a88646cd3e243':'31d1f1df9c246eb734de1be0f6bf6acf',
        '7cd69bed1cc54d83bd7f988f622c1157':'332e0a856cdfcd7a1d6da6dcf84633a7'});

initializePlayer('cspl2', 'https://cors-proxy.cooks.fyi/https://ec01-tpnet-waw.cdn-canalplus.pl/live/store01/CplusSport2HD/hd2-dashdrm02/CplusSport2HD.mpd', {'4f7fa9f0250a43cea8aebd8167f1fc81':'f6bbc783b0e7a46a147e673a4347730a',
      'f5c080517f6c4366b1930315a6aa70e7':'581eba7045254d1de036557789932a05',
        '89787fecb0ac43ab86aa356054e2a183':'f0153c6dc5c55c5f23fcdeed8241d5e4'});

initializePlayer('cspl3', 'https://cors-proxy.cooks.fyi/https://ec01-tpnet-waw.cdn-canalplus.pl/live/store01/CplusSport3HD/hd2-dashdrm02/CplusSport3HD.mpd', {'274cafc63e854f9ca14acbc49af103a0':'4dc63ff74dc5415f3c0c63b62f8fedaa',
      'b4274e5bdb7e4370bb87af609a74a64e':'4763cbd2fa26f4de8bead22db09b0f46',
        '009d1ea463574791a88e5d008f7ab15c':'9204af4358230be2ffac0bec84cc83'});

initializePlayer('cspl4', 'https://cors-proxy.cooks.fyi/https://ec01-tpnet-waw.cdn-canalplus.pl/live/store01/CplusSport4HD/hd2-dashdrm02/CplusSport4HD.mpd', {'bdcfde35c73f4c2dbd628fa3694010b9':'01b8caafb230eb2a07cc965d54ef4441',
      '638d2f06b75c4341a990ebebae2055ae':'493508c2f5af5428bb8e09da1207324c',
            '349ac684fa744cfabea756975f29aa5b':'36e275c981979c0cbac5e50f357d4157',
      'bb22610c6783458f8300ef9a1f159a8e':'48878c1f8963c79e74908a32e73030a1'});
    
// TRING SPORT ALBANIA

initializePlayer('tringsport', 'https://fe.tring.al/delta/101/out/u/sportnjeottencryption.mpd', {'6d3b3c741ba34dcaa1a4c13f644797f1':'5291a8de88aade07c19bc515ea93c3c7',
'02f3babe6e814e399ce5f66a2fa9eaf5':'4ed8c640ecb709df5ed136e016695e45'});

initializePlayer('tringsport4', 'https://fe.tring.al/delta/101/out/u/tringsport4ottencryption.mpd', {'5d52eb6eef80433fac60fc99255ddc0b':'95f3325b3d828312cdc510f30a280af8',
'9384d63d83194230b62bd5ab088626ce':'4f2783df34a16f13ba2a074f0062cf29'});

initializePlayer('dsportarg', 'https://bluf.xyssatuu.workers.dev/https://whitemouseapple.com/1059-vos.mpd', {'3e1c0dd8d951335d9d8c534d29277c91':'978f073eee32606a3f2544306fb1a7b3'});


//tv2 sports Norwegia
initializePlayer('tv2_sport1', 'https://aws-appeartv-cdn.rikstv.no/rikstv/1/11/dash/TV2_HD/manifest.mpd?version=1&adap=no_dolby&RikstvAssetId=rikstv_5711', {'bfb0134de69d76d25b5b4b202df11431':'025915bd3062c4bde44a13916c5bfefe'});

initializePlayer('tv2_premium1', 'https://ch11-hls-live.akamaized.net/out/u/433127.mpd', {'d12e4c9dc52f4cbab7ac9b2278317e47':'a7987e5b6ec42db68a25486e108ca9f2'});

initializePlayer('vsport1no', 'https://live-aws-scalstrm-cdn.rikstv.no/live/rikstv/644bb6e91dbc891fd422efc9/manifest.mpd', {'4d808f2b9a74536cadbd95be141888ed': '9dd89f67b8885dc65721a8b1fbeae700'});

initializePlayer('vsport2no', 'https://live-aws-scalstrm-cdn.rikstv.no/live/rikstv/644bb6e91dbc891fd422efef/manifest.mpd?version=1&adap=no_dolby&RikstvAssetId=rikstv_2752314', {'0d3ff38c34985fdd81a37567646322b9': '6b4504297769acefae2e50920b7c8a77'});

initializePlayer('vsport3no', 'https://live-aws-scalstrm-cdn.rikstv.no/live/rikstv/644bb6ea1dbc891fd422f01e/manifest.mpd?version=1&adap=no_dolby&RikstvAssetId=rikstv_2752315', {'fdcb8ee4623458e5832a92801fc723b1': '634a67c44b7b7030872043df95c1a55e'});

initializePlayer('tv3plusno', 'https://aws-appeartv-cdn.rikstv.no/rikstv/708/2/dash/Viasat4/manifest.mpd', {'bc603bd4cbdaae7f9debc7accca10266':'bb2ed19b76e7bd6cb8ad228b4a79827c'});

//APPLE TV
initializePlayer('appletv1x', 'https://apel.xyssatuu.workers.dev/linear-ak-p-har3.tv.apple.com/Content/HLS_CBC/Live/channel(mls.ec1.us_en_hren_1)/index.m3u8', {'82f6a7338f0130c98c8d98e9a350b987':'0de48627d67af7933fe142801af70d67'});

initializePlayer('appletv2x', 'https://apel.xyssatuu.workers.dev/linear-ak-p-har3.tv.apple.com/Content/HLS_CBC/Live/channel(mls.ec1.us_en_hren_8)/index.m3u8', {'82f6a7338f0130c98c8d98e9a350b987':'0de48627d67af7933fe142801af70d67'});

initializePlayer('appletv3x', 'https://apel.xyssatuu.workers.dev/linear-ak-p-har3.tv.apple.com/Content/HLS_CBC/Live/channel(mls.ec1.us_en_hren_9)/index.m3u8', {'82f6a7338f0130c98c8d98e9a350b987':'0de48627d67af7933fe142801af70d67'});

initializePlayer('appletv4x', 'https://apel.xyssatuu.workers.dev/linear-ak-p-har3.tv.apple.com/Content/HLS_CBC/Live/channel(mls.ec1.us_en_hren_10)/index.m3u8', {'82f6a7338f0130c98c8d98e9a350b987':'0de48627d67af7933fe142801af70d67'});

initializePlayer('appletv5x', 'https://apel.xyssatuu.workers.dev/linear-ak-p-har3.tv.apple.com/Content/HLS_CBC/Live/channel(mls.ec1.us_en_hren_5)/index.m3u8', {'82f6a7338f0130c98c8d98e9a350b987':'0de48627d67af7933fe142801af70d67'});

initializePlayer('appletv6x', 'https://apel.xyssatuu.workers.dev/linear-ak-p-har3.tv.apple.com/Content/HLS_CBC/Live/channel(mls.ec1.us_en_hren_6)/index.m3u8', {'82f6a7338f0130c98c8d98e9a350b987':'0de48627d67af7933fe142801af70d67'});
    
initializePlayer('appletv7x', 'https://apel.xyssatuu.workers.dev/linear-ak-p-har3.tv.apple.com/Content/HLS_CBC/Live/channel(mls.ec1.us_en_hren_7)/index.m3u8', {'82f6a7338f0130c98c8d98e9a350b987':'0de48627d67af7933fe142801af70d67'});

initializePlayer('appletv8x', 'https://apel.xyssatuu.workers.dev/linear-ak-p-har3.tv.apple.com/Content/HLS_CBC/Live/channel(mls.ec1.us_en_hren_8)/index.m3u8', {'82f6a7338f0130c98c8d98e9a350b987':'0de48627d67af7933fe142801af70d67'});

initializePlayer('appletv9x', 'https://apel.xyssatuu.workers.dev/linear-ak-p-har3.tv.apple.com/Content/HLS_CBC/Live/channel(mls.ec1.us_en_hren_9)/index.m3u8', {'82f6a7338f0130c98c8d98e9a350b987':'0de48627d67af7933fe142801af70d67'});

initializePlayer('appletv10x', 'https://apel.xyssatuu.workers.dev/linear-ak-p-har3.tv.apple.com/Content/HLS_CBC/Live/channel(mls.ec1.us_en_hren_10)/index.m3u8', {'82f6a7338f0130c98c8d98e9a350b987':'0de48627d67af7933fe142801af70d67'});

initializePlayer('appletv11x', 'https://apel.xyssatuu.workers.dev/linear-ak-p-har3.tv.apple.com/Content/HLS_CBC/Live/channel(mls.ec1.us_en_hren_11)/index.m3u8', {'82f6a7338f0130c98c8d98e9a350b987':'0de48627d67af7933fe142801af70d67'});

initializePlayer('appletv12x', 'https://apel.xyssatuu.workers.dev/linear-ak-p-har3.tv.apple.com/Content/HLS_CBC/Live/channel(mls.ec1.us_en_hren_12)/index.m3u8', {'82f6a7338f0130c98c8d98e9a350b987':'0de48627d67af7933fe142801af70d67'});

initializePlayer('appletv13x', 'https://apel.xyssatuu.workers.dev/linear-ak-p-har3.tv.apple.com/Content/HLS_CBC/Live/channel(mls.ec1.us_en_hren_13)/index.m3u8', {'82f6a7338f0130c98c8d98e9a350b987':'0de48627d67af7933fe142801af70d67'});

initializePlayer('appletv14x', 'https://apel.xyssatuu.workers.dev/linear-ak-p-har3.tv.apple.com/Content/HLS_CBC/Live/channel(mls.ec1.us_en_hren_14)/index.m3u8', {'82f6a7338f0130c98c8d98e9a350b987':'0de48627d67af7933fe142801af70d67'});

initializePlayer('appletv15x', 'https://apel.xyssatuu.workers.dev/linear-ak-p-har3.tv.apple.com/Content/HLS_CBC/Live/channel(mls.ec1.us_en_hren_15)/index.m3u8', {'82f6a7338f0130c98c8d98e9a350b987':'0de48627d67af7933fe142801af70d67'});
    
initializePlayer('appletv16x', 'https://apel.xyssatuu.workers.dev/linear-ak-p-har3.tv.apple.com/Content/HLS_CBC/Live/channel(mls.ec1.us_en_hren_16)/index.m3u8', {'82f6a7338f0130c98c8d98e9a350b987':'0de48627d67af7933fe142801af70d67'});

initializePlayer('appletv17x', 'https://apel.xyssatuu.workers.dev/linear-ak-p-har3.tv.apple.com/Content/HLS_CBC/Live/channel(mls.ec1.us_en_hren_17)/index.m3u8', {'82f6a7338f0130c98c8d98e9a350b987':'0de48627d67af7933fe142801af70d67'});

initializePlayer('appletv18x', 'https://apel.xyssatuu.workers.dev/linear-ak-p-har3.tv.apple.com/Content/HLS_CBC/Live/channel(mls.ec1.us_en_hren_18)/index.m3u8', {'82f6a7338f0130c98c8d98e9a350b987':'0de48627d67af7933fe142801af70d67'});
    
    
    
initializePlayer('appletv1', 'https://apel.xyssatuu.workers.dev/linear-ak-p-har3.tv.apple.com/Content/HLS_CBC/Live/channel(mls.ec3.us_en_hren_1)/index.m3u8', {'3a46085983273745aa08c55f94fe015d':'a052ab82ff84f9f6616557fc43434d48'});

initializePlayer('appletv2', 'https://apel.xyssatuu.workers.dev/linear-ak-p-har3.tv.apple.com/Content/HLS_CBC/Live/channel(mls.ec3.us_en_hren_2)/index.m3u8', {'3a46085983273745aa08c55f94fe015d':'a052ab82ff84f9f6616557fc43434d48'});

initializePlayer('appletv3', 'https://apel.xyssatuu.workers.dev/linear-ak-p-har3.tv.apple.com/Content/HLS_CBC/Live/channel(mls.ec3.us_en_hren_3)/index.m3u8', {'3a46085983273745aa08c55f94fe015d':'a052ab82ff84f9f6616557fc43434d48'});

initializePlayer('appletv4', 'https://apel.xyssatuu.workers.dev/linear-ak-p-har3.tv.apple.com/Content/HLS_CBC/Live/channel(mls.ec3.us_en_hren_4)/index.m3u8', {'3a46085983273745aa08c55f94fe015d':'a052ab82ff84f9f6616557fc43434d48'});

initializePlayer('appletv5x', 'https://apel.xyssatuu.workers.dev/linear-ak-p-har3.tv.apple.com/Content/HLS_CBC/Live/channel(mls.ec3.us_en_hren_5)/index.m3u8', {'3a46085983273745aa08c55f94fe015d':'a052ab82ff84f9f6616557fc43434d48'});

initializePlayer('appletv6', 'https://apel.xyssatuu.workers.dev/linear-ak-p-har3.tv.apple.com/Content/HLS_CBC/Live/channel(mls.ec3.us_en_hren_6)/index.m3u8', {'3a46085983273745aa08c55f94fe015d':'a052ab82ff84f9f6616557fc43434d48'});
    
initializePlayer('appletv7', 'https://apel.xyssatuu.workers.dev/linear-ak-p-har3.tv.apple.com/Content/HLS_CBC/Live/channel(mls.ec3.us_en_hren_7)/index.m3u8', {'3a46085983273745aa08c55f94fe015d':'a052ab82ff84f9f6616557fc43434d48'});

initializePlayer('appletv8', 'https://apel.xyssatuu.workers.dev/linear-ak-p-har3.tv.apple.com/Content/HLS_CBC/Live/channel(mls.ec3.us_en_hren_8)/index.m3u8', {'3a46085983273745aa08c55f94fe015d':'a052ab82ff84f9f6616557fc43434d48'});

initializePlayer('appletv9', 'https://apel.xyssatuu.workers.dev/linear-ak-p-har3.tv.apple.com/Content/HLS_CBC/Live/channel(mls.ec3.us_en_hren_9)/index.m3u8', {'3a46085983273745aa08c55f94fe015d':'a052ab82ff84f9f6616557fc43434d48'});

initializePlayer('appletv10', 'https://apel.xyssatuu.workers.dev/linear-ak-p-har3.tv.apple.com/Content/HLS_CBC/Live/channel(mls.ec3.us_en_hren_10)/index.m3u8', {'3a46085983273745aa08c55f94fe015d':'a052ab82ff84f9f6616557fc43434d48'});

initializePlayer('appletv11', 'https://apel.xyssatuu.workers.dev/linear-ak-p-har3.tv.apple.com/Content/HLS_CBC/Live/channel(mls.ec3.us_en_hren_11)/index.m3u8', {'3a46085983273745aa08c55f94fe015d':'a052ab82ff84f9f6616557fc43434d48'});

initializePlayer('appletv12', 'https://apel.xyssatuu.workers.dev/linear-ak-p-har3.tv.apple.com/Content/HLS_CBC/Live/channel(mls.ec3.us_en_hren_12)/index.m3u8', {'3a46085983273745aa08c55f94fe015d':'a052ab82ff84f9f6616557fc43434d48'});

initializePlayer('appletv13', 'https://apel.xyssatuu.workers.dev/linear-ak-p-har3.tv.apple.com/Content/HLS_CBC/Live/channel(mls.ec3.us_en_hren_13)/index.m3u8', {'3a46085983273745aa08c55f94fe015d':'a052ab82ff84f9f6616557fc43434d48'});

initializePlayer('appletv14', 'https://apel.xyssatuu.workers.dev/linear-ak-p-har3.tv.apple.com/Content/HLS_CBC/Live/channel(mls.ec3.us_en_hren_14)/index.m3u8', {'3a46085983273745aa08c55f94fe015d':'a052ab82ff84f9f6616557fc43434d48'});

initializePlayer('appletv15', 'https://apel.xyssatuu.workers.dev/linear-ak-p-har3.tv.apple.com/Content/HLS_CBC/Live/channel(mls.ec3.us_en_hren_15)/index.m3u8', {'3a46085983273745aa08c55f94fe015d':'a052ab82ff84f9f6616557fc43434d48'});
    
initializePlayer('appletv16', 'https://apel.xyssatuu.workers.dev/linear-ak-p-har3.tv.apple.com/Content/HLS_CBC/Live/channel(mls.ec3.us_en_hren_16)/index.m3u8', {'3a46085983273745aa08c55f94fe015d':'a052ab82ff84f9f6616557fc43434d48'});

initializePlayer('appletv17', 'https://apel.xyssatuu.workers.dev/linear-ak-p-har3.tv.apple.com/Content/HLS_CBC/Live/channel(mls.ec3.us_en_hren_17)/index.m3u8', {'3a46085983273745aa08c55f94fe015d':'a052ab82ff84f9f6616557fc43434d48'});

initializePlayer('appletv18', 'https://apel.xyssatuu.workers.dev/linear-ak-p-har3.tv.apple.com/Content/HLS_CBC/Live/channel(mls.ec3.us_en_hren_18)/index.m3u8', {'3a46085983273745aa08c55f94fe015d':'a052ab82ff84f9f6616557fc43434d48'});

  
 
//BALL THAILAND
initializePlayer('ballthai1', 'https://aisplay.xyssatuu.workers.dev/ais/play/origin/live/eds/TL001/DASH/TL001.mpd', {'': ''});

initializePlayer('ballthai2', 'https://aisplay.xyssatuu.workers.dev/ais/play/origin/live/eds/TL002/DASH/TL002.mpd', {'': ''});

initializePlayer('ballthai3', 'https://aisplay.xyssatuu.workers.dev/ais/play/origin/live/eds/TL003/DASH/TL003.mpd', {'': ''});

initializePlayer('ballthai4', 'https://aisplay.xyssatuu.workers.dev/ais/play/origin/live/eds/TL004/DASH/TL004.mpd', {'': ''});

initializePlayer('ballthai5', 'https://aisplay.xyssatuu.workers.dev/ais/play/origin/live/eds/TL005/DASH/TL005.mpd', {'': ''});

//J LEAGUE 

initializePlayer('jl1', 'https://aisplay.xyssatuu.workers.dev/ais/play/origin/live/eds/JL001/DASH/JL001.mpd', {'': ''});

initializePlayer('jl2', 'https://aisplay.xyssatuu.workers.dev/ais/play/origin/live/eds/JL002/DASH/JL002.mpd', {'': ''});

initializePlayer('jl3', 'https://aisplay.xyssatuu.workers.dev/ais/play/origin/live/eds/JL003/DASH/JL003.mpd', {'': ''});

initializePlayer('jl4', 'https://aisplay.xyssatuu.workers.dev/ais/play/origin/live/eds/JL004/DASH/JL004.mpd', {'': ''});


//TATA PLAY INDIA

    

initializePlayer('star_select1', 'https://tataplay.xyssatuu.workers.dev/bpk-tv/irdeto_com_Channel_413/output/manifest.mpd?begin=20240611T010000&end=20240630T160000', {'78878826966d58dea2ab1cfee53f0fc6':'775fcbaf688b75ae83310f4ad13fe539'}, true);

initializePlayer('star_sports1_hindi', 'https://tataplay.xyssatuu.workers.dev/bpk-tv/irdeto_com_Channel_252/output/manifest.mpd?begin=20240611T010000&end=20240630T160000', {'69bc7b5441ce54ffac4987ba5d5581cb': 'b339f21a424f6c303570c9266faf5a01'}, true);

initializePlayer('star_sports1', 'https://tataplay.xyssatuu.workers.dev/bpk-tv/irdeto_com_Channel_250/output/manifest.mpd?begin=20240611T010000&end=20240630T160000', {'8dff159d12ac501298981368f2c8fe9a': '0ac6d4cfd9cd499c06c7c6cab034984a'}, true);

initializePlayer('star_sports2', 'https://tataplay.xyssatuu.workers.dev/bpk-tv/irdeto_com_Channel_251/output/manifest.mpd?begin=20240611T010000&end=20240630T160000', {'07c5c19ac7bc532da7d330e92edb2a07': 'bcdfb949862a6e2afee370ffb4095173'}, true);

initializePlayer('sony_ten1', 'https://tataplay.xyssatuu.workers.dev/bpk-tv/irdeto_com_Channel_256/output/manifest.mpd?begin=20240611T010000&end=20240630T160000', {'7d8cc6ee3c9a5a82a0071779f351a9a5': '1d4d52698080d453b032ca44277fd274'}, true);

initializePlayer('sony_ten2x', 'https://tataplay.xyssatuu.workers.dev/bpk-tv/irdeto_com_Channel_726/output/manifest.mpd?begin=20240612T010000&end=20240630T160000', {'6e9595fb8dd05c0aa354185bc2600854': 'edeb8dce0bcf769bdede664604a45d5b', '1cc361e170845936aea7b95c6efb478e':'edf617efde22fbd133c239ed4b47c9d3'}, true);

initializePlayer('sony_ten3', 'https://tataplay.xyssatuu.workers.dev/bpk-tv/irdeto_com_Channel_727/output/manifest.mpd?begin=20240611T010000&end=20240630T160000', {'4428be7aacfb557492c7fa552c3ecbf1': 'fd86b49ad205dec6b52be48e174e5192'}, true);

initializePlayer('sony_ten5', 'https://tataplay.xyssatuu.workers.dev/bpk-tv/irdeto_com_Channel_254/output/manifest.mpd?begin=20240611T010000&end=20240630T160000', {'c71dd63f411a5099844a73fbe850c9fd': '6d99d08dd98ddbe01176e09eb77e0296'}, true);

    initializePlayer('sony_ten2', 'https://jio.xyssatuu.workers.dev/tv/Ten2_HD_MOB/Fallback/index.m3u8', {'6e9595fb8dd05c0aa354185bc2600854': 'edeb8dce0bcf769bdede664604a45d5b', '1cc361e170845936aea7b95c6efb478e':'edf617efde22fbd133c239ed4b47c9d3'}, true);
    
// ARGENTINA

//initializePlayer('espn_ar', 'https://indi.xyssatuu.workers.dev/https://arlocallivechannelsdash.lcdn.clarotv.com.ar/Content/DASH_DASH_FK/Live/channel(ESPN)/master.mpd', {'e2701194a551d30b35a7d493937e50f1':'382ff0152278d8ba946d4fd82a09b212'});

//initializePlayer('espn2_ar', 'https://indi.xyssatuu.workers.dev/https://arlocallivechannelsdash.lcdn.clarotv.com.ar/Content/DASH_DASH_FK/Live/channel(ESPN2)/master.mpd', {'579fc0cd11842bce9c045a0d55aa4872':'bf54d928e27061a13fafdde934146472'});

//initializePlayer('espn3_ar', 'https://indi.xyssatuu.workers.dev/https://arlocallivechannelsdash.lcdn.clarotv.com.ar/Content/DASH_DASH_FK/Live/channel(ESPN3)/master.mpd', {'1b645185cd62d881fa91fd92170690ea': 'e5f759e256c768c6349deb9cc446cabe'});

initializePlayer('fox_ar', 'https://indi.xyssatuu.workers.dev/https://arlocallivechannelsdash.lcdn.clarotv.com.ar/Content/DASH_DASH_FK/Live/channel(FOX_SPORTS)/master.mpd', {'6a5ee0465846b56021136c6c69741375': 'a273d74c9c9269c0793862da41cf41b9'});

initializePlayer('fox2_ar', 'https://indi.xyssatuu.workers.dev/https://arlocallivechannelsdash.lcdn.clarotv.com.ar/Content/DASH_DASH_FK/Live/channel(FOX_SPORTS_2)/master.mpd', {'d6e347e55f793df11e4ed7fc4ca397dd': 'ccc0df4145157aa753e61a3940603d0b'});

initializePlayer('fox3_ar', 'https://indi.xyssatuu.workers.dev/https://arlocallivechannelsdash.lcdn.clarotv.com.ar/Content/DASH_DASH_FK/Live/channel(FOX_SPORTS_3)/master.mpd', {'07d6de0963faf991eadde57c90605350': '214f8c082dfb8ba30c28d1034f5c1eb2'});

initializePlayer('2tyc_sports', 'https://indi.xyssatuu.workers.dev/https://arlocallivechannelsdash.lcdn.clarotv.com.ar/Content/DASH_DASH_FK/Live/channel(TYC_SPORTS)/master.mpd', {'f7dcab829caeffb612740a1c51f0478d': 'b2466bb519b759ae3de1818988532453'});


initializePlayer('tyc_sports', 'https://cdn-lumen01.sensa.com.ar/live/eds/TYCSports/live_dash_cld/TYCSports.mpd', {'cb57741a1cee422690c6294a06eb1320': '7a0cfd493df6ef7cc0d0bb3ad95cec8c'});

initializePlayer('tyc_sport2', 'https://edge1-ccast-sl.cvattv.com.ar/live/c7eds/TyCSport/SA_Live_dash_enc/TyCSport.mpd', {'2b21c8fa9a329cce311a4c4a4aa996a1': 'cc23ea1fb32629f9e1f48c8deeae3e5b'});

initializePlayer('tvpublica', 'https://indi.xyssatuu.workers.dev/https://arlocallivechannelsdash.lcdn.clarotv.com.ar/Content/DASH_DASH_FK/Live/channel(TV_PUBLICA)/master.mpd', {'f887375d1c7f007fb10447e84581be70': '8183007932359a3cf145198b5129119c'});


initializePlayer('espn_ar', 'https://cdn-lumen01.sensa.com.ar/live/eds/ESPN/live_dash_cld/ESPN.mpd', {'e884b711ab111beb8a7ba1e7bcbdc9bf':'cb89ee3961599e3e648a5aad60895f34'});

initializePlayer('espn2_ar', 'https://cdn-lumen01.sensa.com.ar/live/eds/ESPN2/live_dash_cld/ESPN2.mpd', {'65a5bfa3c7a72dde60be9b0c7406c8fc':'0b40ae9f78a7bac3b57ecbf72d3c081e'});

initializePlayer('espn3_ar', 'https://cdn-lumen01.sensa.com.ar/live/eds/ESPN3/live_dash_cld/ESPN3.mpd', {'f4c9f97e2a36feab0e5077f2b44cbc4e': '1743cd03dfe3736b2c95da91a783af38'});

//ZIGGO BELANDA

initializePlayer('zvoetbal', 'https://da-d436234620010b88000103020000000000000008.id.cdn.upcbroadband.com/wp/wp2-anp-g05060506-hzn-nl.t1.prd.dyncdn.dmdsdp.com/live/disk1/NL_000095_019371/_shared_cc010062b17300c4504b6ab5681b5417/NL_000095_019371.mpd', {'16bf72dc22743d929c4318e193408373': 'eae51a1e3904124963074cbf432c7c8e'});

initializePlayer('zselect', 'https://da-d436236720010b88000103030000000000000009.id.cdn.upcbroadband.com/wp/wp1-anp-g05060506-hzn-nl.t1.prd.dyncdn.dmdsdp.com/live/disk1/NL_000094_019321/_shared_cc010062b17300c4504b6ab5681b5417/NL_000094_019321.mpd', {'16bf72dc22743d929c4318e193408373': 'eae51a1e3904124963074cbf432c7c8e'});

initializePlayer('zsport', 'https://da-d436236920010b8800010303000000000000000b.id.cdn.upcbroadband.com/wp/wp7-vxtoken-anp-g05060506-hzn-nl.t1.prd.dyncdn.dmdsdp.com/live/disk1/NL_000014_019661/_shared_6a89db18ec4202bae4d424e84c1f46a2/NL_000014_019661.mpd', {'0be3d503dba13fc9a9c8ad4b89f599e6': '578c2231c526c5e9eb415411e36871bf'});

initializePlayer('zdocu', 'https://da-d436234820010b8800010302000000000000000a.id.cdn.upcbroadband.com/wp/wp5-vxtoken-anp-g05060506-hzn-nl.t1.prd.dyncdn.dmdsdp.com/live/disk1/NL_000098_019255/_shared_cc010062b17300c4504b6ab5681b5417/NL_000098_019255.mpd', {'16bf72dc22743d929c4318e193408373': 'eae51a1e3904124963074cbf432c7c8e'});

initializePlayer('ztennis', 'https://da-d436236320010b88000103030000000000000005.id.cdn.upcbroadband.com/wp/wp6-vxtoken-anp-g05060506-hzn-nl.t1.prd.dyncdn.dmdsdp.com/live/disk1/NL_000099_019256/_shared_cc010062b17300c4504b6ab5681b5417/NL_000099_019256.mpd', {'16bf72dc22743d929c4318e193408373': 'eae51a1e3904124963074cbf432c7c8e'});

initializePlayer('espnnl1', 'https://da-d436234320010b88000103020000000000000005.id.cdn.upcbroadband.com/wp/wp1-vxtoken-anp-g05060506-hzn-nl.t1.prd.dyncdn.dmdsdp.com/live/disk1/NL_000107_019441/_shared_05e8c13b39b3f30524c26012f903ed7f/NL_000107_019441.mpd', {'3e999e38253834baa63881ea451f2839': '99b88d9cde1d8986decbc5985da87187'});

initializePlayer('espnnl2', 'https://da-d436234420010b88000103020000000000000006.id.cdn.upcbroadband.com/wp/wp2-vxtoken-anp-g05060506-hzn-nl.t1.prd.dyncdn.dmdsdp.com/live/disk1/NL_000108_019561/_shared_05e8c13b39b3f30524c26012f903ed7f/NL_000108_019561.mpd', {'3e999e38253834baa63881ea451f2839': '99b88d9cde1d8986decbc5985da87187'});

initializePlayer('espnnl3', 'https://da-d436234320010b88000103020000000000000005.id.cdn.upcbroadband.com/wp/wp3-vxtoken-anp-g05060506-hzn-nl.t1.prd.dyncdn.dmdsdp.com/live/disk1/NL_000109_019464/_shared_05e8c13b39b3f30524c26012f903ed7f/NL_000109_019464.mpd', {'3e999e38253834baa63881ea451f2839': '99b88d9cde1d8986decbc5985da87187'});

//thailand
initializePlayer('pptvhd', 'https://ubn-streamer1.cdn.3bbtv.com:8443/3bb/live/36/36.mpd', {'0aeffa7753674e77b99443fac7757b8a': 'b8c8a462008a40aa91823e0b02e8dd31'});


//ENTITAS TAK DIKENAL
initializePlayer('Bandsports', 'https://0055-jbc.dtvott.com/dash_live_0054/manifest.mpd?da=1&country=BR&accountType=DTH&deviceType=web', {'bd1af42db82f5a17a0d75246f25f5201':'a9edd4e2c410923e9cbcb261102e5008'});


    initializePlayer('sport1de', 'https://ac-009.live.p7s1video.net/c5c609cf/t_009/sport1plus-de-hd/cenc-default.mpd', {'c1c11c3844b0dffdb9d9831900f1a1da': 'a2c31e15346f339ca2b47bdd8591553f'});
    
    initializePlayer('zdfde', 'https://p7s1-live-001-prod.akamaized.net/45371d5a/t_009/zdf-de-hd/cenc-default.mpd', {'7757d3fa8cdab673a2dd9f3ed7b41360': '96e498b70eeecfc0164ed4e0a78e36f3'}); 
    
   initializePlayer('daserste', 'https://p7s1-live-001-prod.akamaized.net/28df258a/t_009/daserste-de-hd/cenc-default.mpd', {'667f821486adfa6df62b53e41fe60c65': 'be65cc2c378180153cbac97bc6ab8625'}); 

initializePlayer('psmde', 'https://ac-001.live.p7s1video.net/52bec925/t_001/prosiebenmaxx-de-sd/cenc-default.mpd', {'f373c6d4b40f79a4036331c5990cf57f': '519c560107c16eef0706835744c2971c'});


initializePlayer('rtlbe', 'https://daiconnect.com/live/dash/rtbf/laune-premium-drm-2/.mpd?t=2023-03-28T15%3A15%3A00.000&USrGDPRC=CPpVcwAPpVcwAAHABBENC9CsAP_AAAAAAAIgF5wFAAKgAXABAACoAFoAMgAaABFACYAE8AKUAWwBcADaAIAAQkA_QD-AIGAUgA_YC8wAAAEhIAMAAQSnDQAYAAglOIgAwABBKcVABgACCU4yADAAEEpx0AGAAIJTkIAMAAQSnJQAYAAglOUgAwABBKcA.f_gAAAAAAAAA&UGDPR=1&DAdID=e76997ff-4695-4a78-9bb8-488e1631872a&requestuid=742b0983-cd7c-11ed-961f-a2691158f87a', {'1a8315e4b64c4e638dc24d93134b9b2d': '2821b54058fb3adc9c6252c631aef9e5'}); 

initializePlayer('latves1', 'https://cache3.zapitv.com/live/eds_c2/la1_4k/dash_live_enc/la1_4k.mpd', {'a3abc44525eef3b0a7af9138a9dbe34a': '7740f8ae4223ce5ba293028f7f78f1c1'});

initializePlayer('hrt2', 'https://cdn1oiv.akamaized.net/hrtliveorigin/hrt2.smil/1/manifest.mpd?DVR', {'994c79af863838109e7f3503bcd2aff9': 'd2c19650ad2a2ac77a95453b941a6f0e'});

initializePlayer('clubrtl', 'https://origin2-rtlbe.live.6cloud.fr/pool_z6h2o6qd/clubrtl/rtlbesd/dash_short_cenc10_clubrtl/index.mpd', {'b53316f32fc93b51a61ba6fdf0bce6c1': 'd752d66843a48a6fed64eed8f87adc3e'});

initializePlayer('sport_1', 'https://dash2.antik.sk/stream/nvidia_sport_1/playlist_cbcs.mpd', {'11223344556677889900112233445566': '11223344556677889900112233445566'});

initializePlayer('novasport1', 'https://dash2.antik.sk/stream/nvidia_nova_sport1/playlist_cbcs.mpd', {'11223344556677889900112233445566': '11223344556677889900112233445566'});

initializePlayer('novasport2', 'https://dash2.antik.sk/stream/nvidia_nova_sport2/playlist_cbcs.mpd', {'11223344556677889900112233445566': '11223344556677889900112233445566'});



 });
