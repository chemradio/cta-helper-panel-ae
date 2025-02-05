// Init params
var testing = false;

var scriptFile = new File($.fileName);
var scriptPath = scriptFile.parent.fsName;


var pathToUberScript = scriptPath + '\\CTA-GFX-Automator.jsx';
var pathToAeTemplate = ''

// UI Icons
var imgEase = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x19\x00\x00\x00\x19\b\x06\x00\x00\x00\u00C4\u00E9\u0085c\x00\x00\x00\tpHYs\x00\x00\x0E\u00C4\x00\x00\x0E\u00C4\x01\u0095+\x0E\x1B\x00\x00\x05\u00BBiTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 7.1-c000 79.a8731b9, 2021/09/09-00:37:38        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:photoshop=\"http://ns.adobe.com/photoshop/1.0/\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stEvt=\"http://ns.adobe.com/xap/1.0/sType/ResourceEvent#\" xmp:CreatorTool=\"Adobe Photoshop 23.0 (Windows)\" xmp:CreateDate=\"2022-01-27T19:35:52+06:00\" xmp:ModifyDate=\"2022-02-02T14:28:02+06:00\" xmp:MetadataDate=\"2022-02-02T14:28:02+06:00\" dc:format=\"image/png\" photoshop:ColorMode=\"3\" xmpMM:InstanceID=\"xmp.iid:72ecbc71-d045-b342-9c90-9e82b223290b\" xmpMM:DocumentID=\"xmp.did:fbad6c92-744f-3647-a241-7068b0f3334d\" xmpMM:OriginalDocumentID=\"xmp.did:fbad6c92-744f-3647-a241-7068b0f3334d\"> <xmpMM:History> <rdf:Seq> <rdf:li stEvt:action=\"created\" stEvt:instanceID=\"xmp.iid:fbad6c92-744f-3647-a241-7068b0f3334d\" stEvt:when=\"2022-01-27T19:35:52+06:00\" stEvt:softwareAgent=\"Adobe Photoshop 23.0 (Windows)\"/> <rdf:li stEvt:action=\"saved\" stEvt:instanceID=\"xmp.iid:72ecbc71-d045-b342-9c90-9e82b223290b\" stEvt:when=\"2022-02-02T14:28:02+06:00\" stEvt:softwareAgent=\"Adobe Photoshop 23.0 (Windows)\" stEvt:changed=\"/\"/> </rdf:Seq> </xmpMM:History> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end=\"r\"?>\u00D5\u00AA\nN\x00\x00\x02\x06IDATH\u0089\u00CD\u0095;h\u00D4A\x10\u0087\u00BF3\u0089\u00D8\u00F8\u0088\u0085\x11$\x12L\f\u0088\u0085b\u00A1\u00E8aTP,\u00C4Z\x04\x0B\x15,\u00E4\u00AC\u00C4\u00C6F\u00B41Vb\x11\x0BA,\u00D4\u00C2R\x10\u00F1|\u0080M\u009A\u00F8Bb\u00A3\\D0V\x01\x1B\x1F\u00A7F\u00CDg\u0091\u00F9\u0093\u00F5\u00BC\u00D3\u00FB\x1F\x1C80\u00CC\u00EE\u00EC\u00CE\u00FCffwg\x0B*A=\u00C0 0\x1F\x10\u00A8\x02O\u0080\x1F4O\u00FD\u00C0U`K\u00F88\n\\B\u00CD\u00F8\u009E\x7F\u00D2\u00EEd\u00FD_\\P\u00BF\u0084\u00DD\x15u,\u00C6\u00A5B\u0092\u00C9\x14\u00D0\x01\u00EC\x03\u0096\x03\u00D7\u0080\u0087@\x19\u0098W'\u00EAj\u0092e\x17\u00B0\x07\u00D8\x05\u00F4\x02\u00EFB?\n\x14\u00D3H>\u00AB\u00E3\u00C9\u00BC\x15\u009A\u00A8\u00C9\u00EE\u00A45\u008A\u00F7\u00B1\u00F1\u00BAz+\u00C6\x17\u00D5~u \u00E1>u\u0083\u00FA)\u00F6\u008C\u00A8\u00DB\u00D4\u00E31?\x14\u00FE\u0096\u00C6\u009E\u00A9\x14dX\u009DL\u00A2z\x15\u00CE\u00EA\u00D5?\x0B\u00A2X\u00A3/\u0087\u00FEg\u00E2g]\u00B3\u0087\u009A\u00F2P\x18\x1Fk\u00B0^R\u00EF\u00AA\u0097\u00D5U*\u00E9\u00C17K\u00F7\u0081\u009D@\u00A1Y\u0083V@d\u00F6\u00D6lm\u00D6\u00A0\u00DE\u00D5\u00FC\x1B-\x0E\u00F9 \u008FQ^\u0090\u00DE\u0090o\u00DA\t\u00B20\u00E4\u0087v\u0082t\u0084\u00CC\u00D3\u00CF\u00FEO\u0090E!?\u00B6\x13de\u00C8\u00C9v\u0082l\x0F\u00F96\u008FQ\u00DE\u00C78\rT\u0080\u00B5y\u008C\u00B2L\u00BA\u0081\u00B3\u00C0\r\u00E0p\u0083\u00BD{\u0099\u00FD7\u00CE\u00E4\x01\x00@]\u0091\u00B4\u00ED\u008C\u00CA5Mo0\u00F4O\x1B4\u00C5\x01\u00F5\u00B1ZUg\u00D4\u008Az.[G}\x11\x0EV\u0087\u00F2`\u00CCO\u00A8\u00EB\u00D5\u00D3\u00EAt\u00B4\u00EFM\u00EA\x12\u00B5'\u00E1e\u00EA\u00A9\u00B0\x19So\u00C7\u00F8{\n\u00A2z\u00BE&\u00B2g\u00B6F\u0099\u00FD\u009Dt\u00DE\x19U+&\x15\\\x00\u00AC\x01\u00C6\u0081\u009B\u00C0W`\x06\u00E8d\u00EE\u009D\u00FCVq`#\u00B0\x03\u00D8\x0FL\x00}\u00C0\u00B7\u00F4L\u008E\x04\u00EA\u00A8z\u00C1\u00B9_\u00AD\u00DB\u00FA\u00F5\u00AF\u00C7\u009B\u00EBd\u00F5<[\u00CF\u00AEp\t\x18\t\u00DC\np\x00x\u0094\u00E3\u00FEt\x01C\u0091i!\u00B2x\t\u00BC\x06\u00F8\x050(F[&5\u0099\u00D8\x00\x00\x00\x00IEND\u00AEB`\u0082";
var imgZoom = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x19\x00\x00\x00\x19\b\x06\x00\x00\x00\u00C4\u00E9\u0085c\x00\x00\x00\tpHYs\x00\x00H\u00E5\x00\x00H\u00E5\x01\u0086\u0088|Z\x00\x00\x05\u00BBiTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 7.1-c000 79.a8731b9, 2021/09/09-00:37:38        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:photoshop=\"http://ns.adobe.com/photoshop/1.0/\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stEvt=\"http://ns.adobe.com/xap/1.0/sType/ResourceEvent#\" xmp:CreatorTool=\"Adobe Photoshop 23.0 (Windows)\" xmp:CreateDate=\"2022-01-28T14:57:06+06:00\" xmp:ModifyDate=\"2022-02-02T14:27:55+06:00\" xmp:MetadataDate=\"2022-02-02T14:27:55+06:00\" dc:format=\"image/png\" photoshop:ColorMode=\"3\" xmpMM:InstanceID=\"xmp.iid:016ed52b-a7a4-a44d-9a9d-6675ff79cf4a\" xmpMM:DocumentID=\"xmp.did:13b514d1-62e7-6b4f-a52c-0ed46d0a9070\" xmpMM:OriginalDocumentID=\"xmp.did:13b514d1-62e7-6b4f-a52c-0ed46d0a9070\"> <xmpMM:History> <rdf:Seq> <rdf:li stEvt:action=\"created\" stEvt:instanceID=\"xmp.iid:13b514d1-62e7-6b4f-a52c-0ed46d0a9070\" stEvt:when=\"2022-01-28T14:57:06+06:00\" stEvt:softwareAgent=\"Adobe Photoshop 23.0 (Windows)\"/> <rdf:li stEvt:action=\"saved\" stEvt:instanceID=\"xmp.iid:016ed52b-a7a4-a44d-9a9d-6675ff79cf4a\" stEvt:when=\"2022-02-02T14:27:55+06:00\" stEvt:softwareAgent=\"Adobe Photoshop 23.0 (Windows)\" stEvt:changed=\"/\"/> </rdf:Seq> </xmpMM:History> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end=\"r\"?>\x04\u00A2#\r\x00\x00\x01\u00C6IDATH\u0089\u00C5\u0095?HVQ\x18\u00C6\x7F\u00F7K0\u0097\u0088\u0086\f\u0087\u00A4\u00C5(\u0084\u00B0U!#\u00EC\u00CF\u00E2\u00E2\u00DC\x12\"A\u008B\u00D0hD\x14\u0094H\x10\u0082\u00A3kcCM\u00F6\x11YD\u0084.\u0082K\u0088.\"\u00D1\x10QK(\x0E\u00FD\x1A\u00CE\u00BDp\u00B8\u00DFw/\u00DF\u00BD|\u00E1\x03\x07\x0E\u00EFy\u00CF\u00F3\u009C?\u00EFyN\u00A2\u00F2\u00BF\u00D1\x03<\x06\u00BE\x02M\u00E0g\x17\u00B9O\x02\x13\u00C0pb\u00D8\u00CA!\u00F0\x1E\u00F8\x00\u00AC\x02\u009B\u00C0A\r\u00E2^`\x18\u00B8\n\u008C\x03\u00D7\u0080\u00E3\u00A8ol\u00C5\u0082J\u008D\u00F6\u00B0\r\u00D7;\u00D4\u00BB\u00B9\u00E0\u009Ez\u00AC\u00A6\b\u00EAN\u008E\u00EF~\u0083p\x171N\x01\u00935\u008E\n\u00E0\x06p:\x17kf\u00EA\x7F\u00D5-\u00F5s\u00B4\u0082\u00F3\x15wp.\u009A\u00BB\u00AEn\u00A6}\u00B2\u0084Q5I\u00FB\u00AF\u00D3\u00C1_\x15\u008F\u00ED{:o%\u008A\u008D\u00A9$\u00B6\x7F'\x0F\u0080'\u00C0\x1A\u00B0\u00D8\u00C11\u00CD\x10\u00AA\u00E9)0\u00D72Z\u00B2\u00B2;V\u00C3\u00BD\"\u00AE\u00A2\u009D\x00\f\x00\u00DF:\u00D8E\u0086!`\u00BB\u00DD@\u00A3d\u00D2\u0099\n\x02\x00\u00FDE\x03e\"]\u00C3\u0091\u008B\u00FC\u00A8\u00C8U\u0098_&2VQ\u00A40\u00BF\u00A7 >\x0B\u00BC \u00B8\u00F1\x12 \u0090\u00B4\u00C9\u00CBJs\x1AX&X\u00CA\u00B3\u00D6\u00ACP\u00CB#Q]\u00BFL\u00EB~_\u00ED\u00EB\u00F0\u00B5'\u00A9C\u00A8\u00BE\u008A\u00E2\u0097c[9P7\u00D4\u00B7\u00D1\u00E3\u00BAT\u00C1RP/DsW\u00D5/i\x1F\u00D4\u00C1\u00DC\u00CB\u00DDWoW\x14\u00C8\u00DA\u0094\u00FA'\u00C7w\x11u:\x17\u00DC\u00AD)\u0090\u00B5\u00AD\x1C\u00DFl\x03\u00B8\u0095\u00BB\u00A6\u00B3\u00C0\u00F3\u00E2\"*\u00C5#\u0082\u00BD\u00C4\u00B8\u0099\u00FD\u00F1\x00\u009F\u0080\u008F\u0084\u00BF~\x03\u00F8]C\u00E4\x040B\u00F8\u00E3\u00AF\x10\u009C\u0099D\u009D'\x18[\x13\u00D8\u00ABA\\\u0084\x01\u00E0:0T\u00E6\u00C2]\u00C3?I\u009B*\u0085Q\u009F\u00CE\"\x00\x00\x00\x00IEND\u00AEB`\u0082";
var imgOpenWipe = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x19\x00\x00\x00\x19\b\x06\x00\x00\x00\u00C4\u00E9\u0085c\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x06\u0088iTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 7.1-c000 79.a8731b9, 2021/09/09-00:37:38        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:photoshop=\"http://ns.adobe.com/photoshop/1.0/\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stEvt=\"http://ns.adobe.com/xap/1.0/sType/ResourceEvent#\" xmp:CreatorTool=\"Adobe Photoshop 23.0 (Windows)\" xmp:CreateDate=\"2022-01-28T15:34:31+06:00\" xmp:ModifyDate=\"2022-02-02T14:29:01+06:00\" xmp:MetadataDate=\"2022-02-02T14:29:01+06:00\" dc:format=\"image/png\" photoshop:ColorMode=\"3\" xmpMM:InstanceID=\"xmp.iid:facba09d-7d00-0c4f-b8ef-ade6ba252387\" xmpMM:DocumentID=\"xmp.did:f2751fd5-48da-2f4b-9d52-d903b9f439de\" xmpMM:OriginalDocumentID=\"xmp.did:f2751fd5-48da-2f4b-9d52-d903b9f439de\"> <xmpMM:History> <rdf:Seq> <rdf:li stEvt:action=\"created\" stEvt:instanceID=\"xmp.iid:f2751fd5-48da-2f4b-9d52-d903b9f439de\" stEvt:when=\"2022-01-28T15:34:31+06:00\" stEvt:softwareAgent=\"Adobe Photoshop 23.0 (Windows)\"/> <rdf:li stEvt:action=\"saved\" stEvt:instanceID=\"xmp.iid:cc60e880-0442-eb4d-bd06-f15db67b17cf\" stEvt:when=\"2022-02-02T14:25:51+06:00\" stEvt:softwareAgent=\"Adobe Photoshop 23.0 (Windows)\" stEvt:changed=\"/\"/> <rdf:li stEvt:action=\"saved\" stEvt:instanceID=\"xmp.iid:facba09d-7d00-0c4f-b8ef-ade6ba252387\" stEvt:when=\"2022-02-02T14:29:01+06:00\" stEvt:softwareAgent=\"Adobe Photoshop 23.0 (Windows)\" stEvt:changed=\"/\"/> </rdf:Seq> </xmpMM:History> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end=\"r\"?>\u00EBcn\u0099\x00\x00\x01[IDATH\u0089\u00DD\u0096\u00BFJ\x04A\f\u00C6\x7F\u00BB\u00AB(\u00CAy\bW(hiee\u00A1\u009D\u00A5>\u0080 X\u00F8\x006\u00FA\n\u00BE\u0084\u00E0k\u00D8\u0088\x0F \u00D8\bV\u00DB\u00D9\u0088\u00D5Y,\u00E2\u009D\u00E2\u00DF\u00BBXL\u00E6\f\u00C3\x1D22+\u00E8\x07\u00D9\u00ECf\u00B3\u00F9&\u0099I\u00D8LD\u00A8\x1B\u00B9\u00EAS@T\u00B6\x03\u009F\r\u00F3\u00CE\u00CBJ\u00E0\u00B3g\u00DE]\u008E\"\u00991\u00B6\u008F\u00C0\u00A7\u00AF\u00BAgla\u00FA\u00F6\u009B\u00D9\u0090$\u00D3r\u0095\u00C02\u00D0\x02\u00AA\u00D0)\x02W\u00BA\u0098Uk\x1CS\u00BD\u008F\u00CB\u00A6\x02\u008E\u00805]]\x0E\u00BC\x02\x0Fz\u00EF3h\x02\u00E3\u00B8,\x0B\u00E0I\u00A5\x00&\u0080s\u008Dw\x02\x1C\"\"\u00A1\u00DCH:\u009C\u0089\u00C8 \x13\u008B9\u00E0\x19\u0098\u00D7\u00D5OF\u0096\u00AC\x02\u0096p[\u00D0\u00B0\u00E5\u00B2(\u00807-\u00D1Oq\u00A7:\x1F\\\u0080u`\x13\u00C8\u0094 )|&\u00C7\u00B8\u00D3\u00D5\x00\u00BA\u00C0TJ\x12\u009FI\u00ADm\u009F\x7F\u00EF\u00F2GH\u00FC\u009El\u00E16\u00FD\x11\u00D7h\u00EFu\u0090\\\x07\u00B6\u00A4$\u00FFgO<\u00C9.p\u0080\u00EB\u00F6\u0097\u00E4,:\x14K\x1Dh\u00D3\"\u00D2\x16\u0091\u00CE\u0090\u00C1\x19#-\u008Dw!\"\u00BF{\u0084K\\\u00D7\u00F7\x18>4\u0093\u0090\u00EC\x18[\x137\u00EA\u0093\u0093X\u00B4\u0081\x05\u00E0V\u009F\u00B3\u00C8\u0098}\x13\u00B7;\u008A\u00E4^I\x16#\u0083[\u00F8\u0081\u00DB\u0081\u00AF\x1F\u0089Z\u00F1\tqG\u00F1\u00F5\u00FC\u008C\u00BA&\x00\x00\x00\x00IEND\u00AEB`\u0082";
var imgCloseWipe = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x19\x00\x00\x00\x19\b\x06\x00\x00\x00\u00C4\u00E9\u0085c\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x05\u00BBiTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 7.1-c000 79.a8731b9, 2021/09/09-00:37:38        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:photoshop=\"http://ns.adobe.com/photoshop/1.0/\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stEvt=\"http://ns.adobe.com/xap/1.0/sType/ResourceEvent#\" xmp:CreatorTool=\"Adobe Photoshop 23.0 (Windows)\" xmp:CreateDate=\"2022-01-28T15:32:42+06:00\" xmp:ModifyDate=\"2022-02-02T14:28:07+06:00\" xmp:MetadataDate=\"2022-02-02T14:28:07+06:00\" dc:format=\"image/png\" photoshop:ColorMode=\"3\" xmpMM:InstanceID=\"xmp.iid:72cbfd70-6351-1c41-8f74-06b88166a592\" xmpMM:DocumentID=\"xmp.did:291e9224-0bd1-174b-8f17-e6a2675edca2\" xmpMM:OriginalDocumentID=\"xmp.did:291e9224-0bd1-174b-8f17-e6a2675edca2\"> <xmpMM:History> <rdf:Seq> <rdf:li stEvt:action=\"created\" stEvt:instanceID=\"xmp.iid:291e9224-0bd1-174b-8f17-e6a2675edca2\" stEvt:when=\"2022-01-28T15:32:42+06:00\" stEvt:softwareAgent=\"Adobe Photoshop 23.0 (Windows)\"/> <rdf:li stEvt:action=\"saved\" stEvt:instanceID=\"xmp.iid:72cbfd70-6351-1c41-8f74-06b88166a592\" stEvt:when=\"2022-02-02T14:28:07+06:00\" stEvt:softwareAgent=\"Adobe Photoshop 23.0 (Windows)\" stEvt:changed=\"/\"/> </rdf:Seq> </xmpMM:History> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end=\"r\"?>\u00C3\x1E\u00EB\u00BC\x00\x00\x029IDATH\u0089\u00B5\u0096\u00BFk\x14A\x14\u00C7\u00BF\x1B\x13\x14\u00E5\u00CE\b\u0091\x0B\u009E)\x041xh\u00A2\u0088G\u0090\u00A4\u00D24B\"h)\u0088\u008D\u0095\u00FE\x0B\x166Vba+\u0082],\x04\x7F\x10\u00F3C.\u009E\u00D5a#\x01S\u008A\x10\u00B0Q\u0082\u00E0\x0FB4\u00D1\u00FBX\u00EC\u00BBdn\u009C\u00D9[\u0090<x\u00CC\u00DE\u00BC\u00EF\u00DCg\u00DE{\u00BB\u00B3\u009B\x00\u00DAn\u00EB\u00B2\u00F1\u0085$$5m\u00FC\x1F\x7F\u00EFC\u00BAm,\u00D8\u0088\u00A4\r\u0083\u00ED\u00B0\u00B8\u009B\u00EAo\u008B%6\u00EFk\u00BA$\u00FD\u008AAzm\u00EC\u0097\u00B4\u00E2,\u00E8\u00F1 \x1B\u00DEo\x1F\u00D2\u00B4\u008D\u00B4Y\u00AB\\\u0089\u008D?%\u00DD\u0094\u00B4(\u00E9\u0086\u00EDj\u00DD\u00F1\x07\u0092\x1A\u0092\u00A6%-I\u00BA\u00ECivK\u009A5\u00CD\u00A2\u00A4[\u0092$@\u00C0\x12\u00A9\x15\u0080\u00B7v\u00FD\u00C8b\u00AE/\u00D3n\u00B7\u00BDx\tXw\u00E2\u00B3\u00C0f\u00B9\\\u00DB'\u00E9\u008F\u00A5=\"\u00E9\u008D\x13\u00ABZ\t\u009BV\u00A6\u00AF\u00DE\u00DA\u00CF\u0092\u00CEJ\u00BAc\u00DA\u009D\u00B1L\x1A\u00C0\x02p\x10\u0098\x01F\x02\x19\u00C5|\b\u00B8\x0F\f\x02\u0097\u0080s\u00C0?\u0090^oQ\x05\u00A8\x03\u00D5\u009C\u0080:p\u00C2\u008Fu\u0082\b8n\u008BOe\x00*\u00C0+\u00E0t(\u009E\x07\"`8\u00B6K+\u00CDBVY\u00F3B\x04\u009C\u00B4\u00DD\x0E9s\u0087\u0081\x1A0\u00EAi{\u0080q\u00DB\\\u00B0\u00F1\u00F7\u0080\u0087\x1D@e\u00D3\u00D6\u0080\u00B1\u0080\u00AE\u00CF\u00FE\u00AF\x11\u0083|\x02\u00BEgd\u00D4\x0F<\x03\u00E6\u0081C\x11M\x1B\u00C4\x7FN\u00F2\x1C\u00C9+J\u00CF\u00BA\u0082\u00A4/9\u00F4\u009B\u00C7J\u00CB\u0092\u00A0j\u00CB\x06$\u00CDK\u00BA.iR\u00D2\x13I\u00C7:R\x02\u00E5\u009A\x02\u00A6\x03%([\x0F\u00C6\u009D\u00B9\u00AA\u00F5\u00A8\u00E2i\u00BB\u00ADW\u0095PO\u00F6f\u00F4\u00E1%p>\x10;Cz\x0B\x0F\u00C6\u00FA\u0098\u00E7\x16.Y\u0093'2n\u0086Q\x03\x1D\u00C9\u0082\u00BC3H\u009F'\u00D8\x0F\u00CC\x01\x172\x00.\u00A8F\u00FA\u00EC\x04!S\u00C0G/\u0093\"\u00F0\x14\u00B8\u0098\x03\u00D0\u00F21\u00E0\u00B9et\x15\u0098t!\u00AE\u00BF&=B\u00EEFz\u00D0\u00C9\u0087\u0081\u00C7V\u0099z\f\u00B2\u00CC\u0096]\u00F3bE\u00E0\x03\u00F0\u00CD2\x07\u00B8\u00E2i\x0E\x00k\x16\u008B\u00BE\u00B4~8\u00D7G\x03\u00CFUY\u00E9\u00CB\u00A8hs{<MI\u00D2.\u00BB^\u0095\u00A4\x04\u00B6\u00FF\u00BB\u00EB/\"\x18\x00k\u00DC\u00D1\u00E8\u00DC\x00\x00\x00\x00IEND\u00AEB`\u0082";
var imgScroll = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x19\x00\x00\x00\x19\b\x06\x00\x00\x00\u00C4\u00E9\u0085c\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x05\u00BBiTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 7.1-c000 79.a8731b9, 2021/09/09-00:37:38        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:photoshop=\"http://ns.adobe.com/photoshop/1.0/\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stEvt=\"http://ns.adobe.com/xap/1.0/sType/ResourceEvent#\" xmp:CreatorTool=\"Adobe Photoshop 23.0 (Windows)\" xmp:CreateDate=\"2022-01-28T15:43:43+06:00\" xmp:ModifyDate=\"2022-02-02T14:28:51+06:00\" xmp:MetadataDate=\"2022-02-02T14:28:51+06:00\" dc:format=\"image/png\" photoshop:ColorMode=\"3\" xmpMM:InstanceID=\"xmp.iid:b11ca61c-c017-544c-a6ff-078ddf2b701b\" xmpMM:DocumentID=\"xmp.did:396c2ad0-62be-ba40-9287-26642a0d296b\" xmpMM:OriginalDocumentID=\"xmp.did:396c2ad0-62be-ba40-9287-26642a0d296b\"> <xmpMM:History> <rdf:Seq> <rdf:li stEvt:action=\"created\" stEvt:instanceID=\"xmp.iid:396c2ad0-62be-ba40-9287-26642a0d296b\" stEvt:when=\"2022-01-28T15:43:43+06:00\" stEvt:softwareAgent=\"Adobe Photoshop 23.0 (Windows)\"/> <rdf:li stEvt:action=\"saved\" stEvt:instanceID=\"xmp.iid:b11ca61c-c017-544c-a6ff-078ddf2b701b\" stEvt:when=\"2022-02-02T14:28:51+06:00\" stEvt:softwareAgent=\"Adobe Photoshop 23.0 (Windows)\" stEvt:changed=\"/\"/> </rdf:Seq> </xmpMM:History> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end=\"r\"?>\u00F9\u00A3RK\x00\x00\x01:IDATH\u0089\u00E5\u0095\u00B1j\x02A\x10\u0086?\u008Fk\x04A\u009B\u00F4\tXH\x1A\x0B\x0B\u009F\u00C2\u00CEB\x1F#B\u008A<\u0085oa\x04\u00ED|\u008A\x04\u00F2\x06Ic#Q\x02B\u00B0\u008A\u00C9Y\u00EC\u00ACN\u00CC.\u00ECm\u00BCF\u00FFf\u00E6fg\u00E6co\u00E7\u00F6JY\u0096\u008D\u0081\x17\u008AS+\x05\u009E\u0080a\u0081\u0090\u00BB\x04H\x0B\x04\x00\u00A4\x1AP\x07f\u00E2'@)\u00A2a\x06\u00FC\u0088\u00DF\x01^\u00E1\u00F7.*@#\u00A2\u00B1O\x15\u00EBh\u00C8\u0097\u00F2\x07\u00C02\u00A2\u00F1\x15\u0087\u00F3\u00DD\u00F7\u00F3\u009D\u00C7\x7F\x06\u00E1Om\u00E2I\u00BC\u0089\x04\\\u00BB\u0082>\u00C8Iu\u00B9\u0090>\u00B0\x10\x1B\u00AC<_{\x17\x18\u0089?\u00C2\u008C\u00E84\u00A40t']`\x02\u00BC\x01m\u00B1\x13\u0089GCt\u00DC\x02\u00E6@\x13x\x16;w\u0080\u009CW\u0091\x0F\u00B2\x15\u00DBS\u0080[`#\u00F1\u008D<[PO\u00E2\u00DFy \x1Fb\x1F\u0081\u00F5\x11\u00C0\u00CA\u0082\u00D6\u0092\u00A7\u00EB\u0082 U\u00B1}\u00CC\u00A5y\f\u00D0\u00A0\x06\u0087i\u00AB\u00BA\u0092|\u00D3U\x16;\u00F6\u00ACk\u00BD\u00AB\u00BC\u00B2+\u00C1\u00B7\x13\u00E7\u00BB\rP\u00AE39\u00A9\u00CE\x0Bb\u00BF\t=~\u00AB\u00C8~\u00BA\u00CE\u00F6\u00DB\u00A6\u0098k\u00E2\x1E\u00F3\u00EB\u00FC\u0094\u0085\x07\u00CC\u00FC\u00E7UM\u00F5\x18\b\u00B4\u00B5\x03\u00B8\u0090?\u00F7\u00849\x1C\u00E3\x00\x00\x00\x00IEND\u00AEB`\u0082";
var imgRetime = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x19\x00\x00\x00\x19\b\x06\x00\x00\x00\u00C4\u00E9\u0085c\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x04\u00EEiTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 7.1-c000 79.a8731b9, 2021/09/09-00:37:38        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:photoshop=\"http://ns.adobe.com/photoshop/1.0/\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stEvt=\"http://ns.adobe.com/xap/1.0/sType/ResourceEvent#\" xmp:CreatorTool=\"Adobe Photoshop 23.0 (Windows)\" xmp:CreateDate=\"2022-02-02T14:26:35+06:00\" xmp:ModifyDate=\"2022-02-02T14:28:21+06:00\" xmp:MetadataDate=\"2022-02-02T14:28:21+06:00\" dc:format=\"image/png\" photoshop:ColorMode=\"3\" xmpMM:InstanceID=\"xmp.iid:2622f664-3389-c443-95d7-e42c54b10d86\" xmpMM:DocumentID=\"xmp.did:2622f664-3389-c443-95d7-e42c54b10d86\" xmpMM:OriginalDocumentID=\"xmp.did:2622f664-3389-c443-95d7-e42c54b10d86\"> <xmpMM:History> <rdf:Seq> <rdf:li stEvt:action=\"created\" stEvt:instanceID=\"xmp.iid:2622f664-3389-c443-95d7-e42c54b10d86\" stEvt:when=\"2022-02-02T14:26:35+06:00\" stEvt:softwareAgent=\"Adobe Photoshop 23.0 (Windows)\"/> </rdf:Seq> </xmpMM:History> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end=\"r\"?>\u0097\u00E3'\u00A5\x00\x00\x03vIDATH\u0089\u00DD\u0096]h\x1CU\x14\u00C7\x7Fwfw\u0093\u00DD\u00CD\u00CE\u00A6\u00B1\u00B5F7\u00A4*j\x0B\u008D\u00C4\u0088R\u00B1\u00FA\u00A0\"5J,\n\x15\u00D4>X\u00A4\u00D8\u0097R_\u00C4\x0FL\u00B1RZP\u00A9\x16\u00F1E\f(Vh\x1FD)~\u0094\x14\tv\x13#m\x17\u00C4\u008A\u00FDHLR\u009B\x0F\u00B36\u00C9~evw\u00E6\u00DE\u00EB\u00C3d!\u00C9n\u00E2\n\u00E9\u008B\x17.\u00DC\u00B9\u009C\u00F9\u00FF\u00CE9s\u00E7\u009C+\u00B4\u00D6\\\u00EBa\\s\x02\u00E0+-\u00A2\u00A7\u00AFl\x076\x03b\u0085\u00B4\u00E3\u00A9{b\u009F-\u0080\u00CC\x01v\u00B02\u00D1\u0095\u00BEA\x19$\u00B0\u00E8\u00B9|\b\u00E1M\u00AD\u00BD\u00B9\u00FC\b\u0094\x16\u00F3E\x1D@\u00B18\x12)\x11\u00F5\r\x18k#\u00E8\x1C\u00E8\u00BC\u008D\u00A8\tB\x1D\u00E8\u00894\b\u0081\u00CE\u00A6\x17C\u00F5\u009C\x1E\u0094\t.0\u00F3\u00BC574\u00A3F.\u0091\u00DD\u00D6Ajc\x03\u00E9\u00D6\u00EBIm\\E\u00F6\u00E9v\u00D4\u00D8\brx\u00E0_#[&\u00FF\x02\u00B3\u00A5\t{\u00FF\u00DBd\u00B6\u00DC\u008D\u009AI\x12|\u00EB\x10uG\u00BB\u00A9\u00DD\u00D3\t\u00C5Y2\u008F\u00DEE\u00F6\u00B16t6\u008D\bG\u00FE#DJ\u00CC\r1f_y\u009D\u00FC;\u009DD\u008E\u00F7\x11=\u00FD\x13f\u00EB&\u00E4\u00E0\x1F\u00D4\u00BE\u00F12V\u00BC\x07\u00DF\u00A6\x07\x11kn\u00F0 \u00D1zP\u00AAz\u0088h\u00B8\x0E\u00A77A\u00E1\u00C3\x03\u00D4}\x19\u00C7|\u00E0>\u00E4\u00B0\u0083s\u00FC\x18\u00F9\u00F7\u00DED\u00E7\u00C1\u00E9\x1D\"t\u00E8S\u00A2gG\x11\u0091(r\u00F0<\u00F8\x03\u0095\u00E4*\u009F&\u00D1X\u0087\u00BD\u00ED%\u00CC\u00D6{\tl\u00BD\x1F\u00B7\x7F\x18\u00D1x\x13\"ba4\u00C6\u00A0\b\"\u00E0\x07\u009F\x1FQo`\u00EF\u00DD\x03\u00B9\f\u0091\x1F\u00FA\u0090\x17\u00AET\x011\f\u0098r\u0090\u00E7\x12\u0084\u00DE\u00EDB\u008D*\u00F0\u00F9\u00BC\u00A3[\u00C8#\u0082!\u00C4j`@z\u0099\x1D\u009C$\u00F8\u00DAA\u00E4\u00D0E\u00D4\u009FSU\u00A6\u00CB0\u00D033\b!0nlB\u00E7f\u00BD}\u00AD\x11k\x1Bqz\u00BE\u00C7\u00F9\u00B6\x1F\u00B3\u00A5\x19aEA\u0098\u00A05v\u00E7n\u0090\u0080Y\u00C1\u00EF\u00B2\x1D\u00A5 b\u00A1\u0095B%'\u00A06\u00E81\u00FEN\u00E2\x7F\u00FC)\u0082\x07>\"\u00B7\u00FDI2[\x1EF\r]DD\u00FC\u00E0\u00F7\x13\u00DCw\x18m(\u0090nu\x10cM\r\u00C6\u00ADwP<\u00DA\u0085\x113\u00C1uAI\u00F4\u00D445;wa\u009D\x19\u00C1\u00BC\u00BD\u0085\u00EC\u00F3\u00ED\b\u00CB\u00A2\u00F8\u00D5\x17\x14>\u00D8\u008F\u00D1\u00BC\u00BA\u00CAt\x01*i\x13\u00DCw\x18\u00F7\u00D4I\u00DC\u00FE\x01\u008C\u009B\u00D7\u0081\u0094 \x04\u00EA\u00D2e\u00F4\u00D44\u00C1\u0083\u00EFc%\u00C6p\u00BE;\x01\u008EC\u00F8\u00C87\u00A8\u0081\u0089\u00EA!zr\u0092@\u00C7#\x04\u00B6>Kf\u00F3m\u00A8\u00F1Q\u00CC\u00B6u\u0088h\x03H\u008D\u0088\u00D6\u00A3\u00A7s\u0088Z\u0083\u00E2\u00B1Op\x7F9\u0083\u00B9\u00BE\t\n\u00C5\u00EA!\u0098&\u00F2\u00F7q\u00C2\u009F\x1F!\u00F0\u00CC\x0B\u00A4\u00DBb\u00E4v\u00BC\u0088\u009B\u0088#V\u0085q{N \u00CF%H\u00DD\x12%\u00F0\u00DCN\u00AC\u00EE\x1E\u00E4\u00AF\u0097\u00C1\u00AC,\u00B7tY\u0091.\u00F2\u00FC8\u00E1\u008F\u00BB\bw}\u008D\u00DB\u00F7#\u00F6\u00AB\u00BB \x14\u00C2\u00DE\u00BB\x1B\u00F7\u00E7S\u00D4u\u009F\u00C5\\\x7F'\u00F2\u00C2\u00D8\u0092\x00X\u00AE\u00B4\x0B\x01\u00CAE\u00FE6\u0082\u00EF\u00A1v\u00AC':\u00D0)\x1B\u00FD\u00D7U\"\u00F1A(\u00E4\u00C1u\u00D1v\x0E\u00AF\u00E8.\u00DD\u00EB\u00E6C\u00FC\u00E5\u0091\t0M\u00F4\u00E4\x04\u00BA\u00D4K\x04\u00E8\u00ABI\u00D0j\u00A1]\u00D9\u008B\u00F8+A\u008Ax\u00BFS\u00E5\u00B8\u00E7\u0097s]\u00B9\x10\u00CE\u00B7\u009E\u00D3+\u0083\u00F4\u00CEy\u00B0b=\u00BE\u00B4\x10\u00FF\u009B+\u00D1?\x1E\u00CFc\u00C3\u00B8\u00EFl\x0E\x00\x00\x00\x00IEND\u00AEB`\u0082";
var imgSlideIn = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x19\x00\x00\x00\x19\b\x06\x00\x00\x00\u00C4\u00E9\u0085c\x00\x00\x00\tpHYs\x00\x00#\u00D5\x00\x00#\u00D5\x01\u0090\u0087q\u00DA\x00\x00\x05\u00BBiTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 7.1-c000 79.a8731b9, 2021/09/09-00:37:38        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:photoshop=\"http://ns.adobe.com/photoshop/1.0/\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stEvt=\"http://ns.adobe.com/xap/1.0/sType/ResourceEvent#\" xmp:CreatorTool=\"Adobe Photoshop 23.0 (Windows)\" xmp:CreateDate=\"2022-01-27T19:36:38+06:00\" xmp:ModifyDate=\"2022-02-02T14:28:46+06:00\" xmp:MetadataDate=\"2022-02-02T14:28:46+06:00\" dc:format=\"image/png\" photoshop:ColorMode=\"3\" xmpMM:InstanceID=\"xmp.iid:c79dab57-c497-9947-8aa7-4fbdea35c301\" xmpMM:DocumentID=\"xmp.did:df6847d3-c974-f54e-87af-5eea4e652d2b\" xmpMM:OriginalDocumentID=\"xmp.did:df6847d3-c974-f54e-87af-5eea4e652d2b\"> <xmpMM:History> <rdf:Seq> <rdf:li stEvt:action=\"created\" stEvt:instanceID=\"xmp.iid:df6847d3-c974-f54e-87af-5eea4e652d2b\" stEvt:when=\"2022-01-27T19:36:38+06:00\" stEvt:softwareAgent=\"Adobe Photoshop 23.0 (Windows)\"/> <rdf:li stEvt:action=\"saved\" stEvt:instanceID=\"xmp.iid:c79dab57-c497-9947-8aa7-4fbdea35c301\" stEvt:when=\"2022-02-02T14:28:46+06:00\" stEvt:softwareAgent=\"Adobe Photoshop 23.0 (Windows)\" stEvt:changed=\"/\"/> </rdf:Seq> </xmpMM:History> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end=\"r\"?>7\u00E0\u00A9l\x00\x00\x02\x12IDATH\u0089\u009D\u0094\u00BDkTQ\x10\u00C5\x7F\u00FB\u00F6%\u00D9\u0098`$\u00A8\u00B1\u00B1\u00B1\x12\u00A2\u008D`e!\b\u00E2\x7F`a\u00A36\u008A\u0085\u0085X\n\u00D1`!H\u00C4JR\u00A8\bQ\x14!\u0085\u0085\x01m\u0084\x14\"\u00E2\x17(\u0088v\"\u00D8%\b~\u0085\x18\u00B3?\u008B7K\u00C2\u0082\u00BB\u00B3\x1E\u00B8\u00BC9s\u00E7\u00EC\u00BC7\u00E7\u00DE\u00C5\nWT\u00D4\u00C7\u00EAk\u00F5R\u00F0\u00D9\u00E0\u00D3\u00C1o\u00A8/\u00D5{\u00C1\u00A7b\x7F.\u00F89\u00F5\u0095:\u00AF\x16\u00EA\u0084\u00B1qY\u00DD\x18\u00F1\u00B0\u00BAIm\x04\x1F\n>\x18\u00BC\u0088gk5b\x7F(\u00F8@\u00F0\u00E1\u00E0\u0083\u00EAE\u00DAD\u0099u^\u00ED\u00EBE\u00D3\x1A\u00D1PRp:\u00C6;\u0095\u00AC/\u00D5\x07\u00A8+\u00EAhB0\u00AE.\u00A9\x07\u00D5\x05\u00F5PB\u00D3P\x17\t\u0093\x1B\t\u00C1\x07\u00F5Z\u00C4g\u00D5\u00C5\u0084\u00A6\u00AE^\u00C8\u00CE\u00F5\u00A8\u00FA\u00BC-7\x17\u00FE\u00A4<\u0099\u00ED\u00E2\u00C9\u00B6\u00F0\u00E1\u00A6:\x12\u00B9\x11u2\u00F2\u00E3]<\u00B9\u009D\u00F1d\u0087\u00D5\u00BDx\u00AA>\u008C\u00DC}\u00F5\u0085zG\u00DD\u009B\u00F1d\u00DA\u00B5{\u00D0i\x1DV\u009FE<\u00AF\u009EHzr\u00B5\x04N\u0091C?\u00F0+\u00E2%\u00A0LhV\u00813%p\x0B\u0098\ba'l\r\x11\u00C0\x1F`s\u00ACN\u00A8\x03\u0093%p\f\u00D8\t,w(\x16\u00D8\x0E\u00BC\t\u00BE\x00\x1C\x07\x0EtiR\x02\u00FBJ\u00E0\x1Dp\x12\u00F8\u00D6Ep\x04\u00D8\x1F\u00F1(p\x17\u00B8\u00DEE\u00D3\x0F\u00CC\u0094Ts~\u00DB\u00A5\x18\u00E03k>\u00F4\x03_\u0080O\t\u00DD\u008F\"\u0084#\u0089\u00E2\rTc\x03h\x02\u0083\t\u00CD\x00\u00D0WP\u0099S$\x04\u00FF\u008Bz\x11o\u00D5L\x14\u0097\u00C0\u00EF\u0088\u0097\u00C9\x1Da\u0080fAu,3M\n`\x17\u00B0\x07\u00D8\u009Dl\"\u00B0Z\u008483\u00AE'TGw\x1A\u00F8\x0E<Jh\x00\u008A\u0092\u00BC'\u00EF\u00A9\u00BEb\u0080\u00CEwj=j\u00F4\u00E8I\x0B\u00D9\x06-4\x0B\u00AA\u00BF\u0088\u009F=\n\u00B3X\x06VJ`\u008C\u00EA\x06\x7F\u00A5\x1A[\u008D\u00EA\u00CB\\\u00C7\u008D\\;\u00AFE\u00EE_\u00BC\x01\u008C\u00D5\u00D4\u008FT\u0086\u00AE\u00B0v\b\u009A\u00EB~\u00B4\x17\u00DE\u00DE\u00A4\x0El\u00F9\x0B|?d\u00BC\u00A9\u009C\u00D4:\x00\x00\x00\x00IEND\u00AEB`\u0082";
var imgAME = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x19\x00\x00\x00\x19\b\x06\x00\x00\x00\u00C4\u00E9\u0085c\x00\x00\x00\tpHYs\x00\x00\r\u00D7\x00\x00\r\u00D7\x01B(\u009Bx\x00\x00\x05\u00BBiTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 7.1-c000 79.a8731b9, 2021/09/09-00:37:38        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:photoshop=\"http://ns.adobe.com/photoshop/1.0/\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stEvt=\"http://ns.adobe.com/xap/1.0/sType/ResourceEvent#\" xmp:CreatorTool=\"Adobe Photoshop 23.0 (Windows)\" xmp:CreateDate=\"2022-01-28T15:44:13+06:00\" xmp:ModifyDate=\"2022-02-02T14:29:05+06:00\" xmp:MetadataDate=\"2022-02-02T14:29:05+06:00\" dc:format=\"image/png\" photoshop:ColorMode=\"3\" xmpMM:InstanceID=\"xmp.iid:6f69bd85-850c-5b4f-87fe-7cd44990093b\" xmpMM:DocumentID=\"xmp.did:084d34cf-50d9-0e4c-87ce-a6ad2d11fdcd\" xmpMM:OriginalDocumentID=\"xmp.did:084d34cf-50d9-0e4c-87ce-a6ad2d11fdcd\"> <xmpMM:History> <rdf:Seq> <rdf:li stEvt:action=\"created\" stEvt:instanceID=\"xmp.iid:084d34cf-50d9-0e4c-87ce-a6ad2d11fdcd\" stEvt:when=\"2022-01-28T15:44:13+06:00\" stEvt:softwareAgent=\"Adobe Photoshop 23.0 (Windows)\"/> <rdf:li stEvt:action=\"saved\" stEvt:instanceID=\"xmp.iid:6f69bd85-850c-5b4f-87fe-7cd44990093b\" stEvt:when=\"2022-02-02T14:29:05+06:00\" stEvt:softwareAgent=\"Adobe Photoshop 23.0 (Windows)\" stEvt:changed=\"/\"/> </rdf:Seq> </xmpMM:History> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end=\"r\"?>\u0080_\u00A6x\x00\x00\x01\u00E6IDATH\u0089\u00BD\u00D6=lMa\x1C\x06\u00F0\u00DF\u00AD\u00DB\x12\"M|5Z\x1B\x11\u008B\u00AFE\"\x11D\u00C4\u0080\u008D\x10\u00C5D\u00C2(1\u0088IL]\u00BA\u0099\f\f\x161ub\u00EC@0H|VD\u0088A1H\u009B\x1A4\u00A1\u00C5\u00DF\u00F0\u00BE'=\u00B99\u00D1\u00DB\u00F6^Or\u00F2>\u00E7\u00FDz\u00CE\u00F3\x7F\u009Fsrj\x111\u008Au\u00DA\u0087O\u00B5\u0088\b|\u00C0\u00BD6\b\u00EC\u00C7&\u0091p%\"\u00B4\u00E1\u00BA\x10\x11\u00D1\u0091\x15W\u00B5\u00C1\x05\u00F4@G\u00C5\u00C0I\ff~\x16\u00B7\x16\u00AAT%r\x06\x17\u00D1\u008Bc8\u009Dyg\x1E\u00EFE=\u00DF\u00F7\u00A2k>\"Or\u00FB\x19WQ\u00CB|C\u00A9\x7F=\u00B6f\u00BEg6\u0091zE_wn/\u00E3\u0088T\u00B2~\\\u0092\u00CE\u00AE?o^\u00CF\u00FC\u00F5l\"E\u00BA\u00AE\u0095\x12q;\u00F7\u0089\u0088\u00EB\u0099\u00D7#b8\"\u00C63/\u00E6\x16|yDl\u008F\u0088\u00C5\r\u00E9\x1A(\u00A7\u00AB\u008C_\u00B9\u00ED\u00C49l\u00C34\u00CEce\u00E6K\u00B16\u00F3\u00D58\u0080\u00A7\u00D8\u00D8l\u00B9\x1A\u00F1V\n\u00C3 \x02{1T\u00E2\x13\x18\u00CE\u00FC}\u00D5\x06UN\x1A\u00F1\x037\u00B1\b;1\u00825\u00D2\u00F9\u008CH\u00CE\u00BFe>5_'\x05\x0Ea\x07\u00C6\u00A4\u00C4u\u00E7\u00CDk\u00D8\u0085\u00FB\u00D8\u0082W\x0B\x11!%\u00E90^\u0098\u0089\u00F2\u009B\x12\x1F\u00ADZ\u00D4L\u00B9\u00CA\u0098\u00C4]\u008Cc\x05\u0096Ig\u00F2=\u00F3\u00E9\u00AAEsuR`\u009F\u00E4\u00E8\u00A5T\u00AE\u00CD\u0099\u00F7\u00E1K\u00ABD\u00E0!vK\u00A5z$\u00C5\u00FB\u00A3\u00E4\u00F4xybU\u00B9j\u00B9\u00AD\u00B4^\u00C2\x04\x1E\u00E01~J\u00EF\u00C8s\u00BCk\u009CX\u00E5$J\x0F\u00F0g\x16!8\u008ASY\u00AC\u00AB\u00EA\u00E1\u00AAD\u008A\u00AF\u00ED\u00EF&\x04\x1A1\u0085\x1B\u00D2\u00F7\u00EE\u009F\"w\u00A4\u00FC\u00F7\u00CDa\u00F3\u00C9\u00BC\u00A6\x07\u00CF\x1A\x07\u00ABD\u0086\u00F2\u00D52\x14\x07?\u00D6\u00CAMK\u00F8\u00CA\u008C\u0093\x13X\u00D2\x06\u0091\u0083P\u00FB\x1F\u00FF]\x7F\x01;\u0081\x02xM\u00B7H\n\x00\x00\x00\x00IEND\u00AEB`\u0082";
var imgRoundRect = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x19\x00\x00\x00\x19\b\x06\x00\x00\x00\u00C4\u00E9\u0085c\x00\x00\x00\tpHYs\x00\x00\x0E\u00C4\x00\x00\x0E\u00C4\x01\u0095+\x0E\x1B\x00\x00\x05\u00BBiTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 7.1-c000 79.a8731b9, 2021/09/09-00:37:38        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:photoshop=\"http://ns.adobe.com/photoshop/1.0/\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stEvt=\"http://ns.adobe.com/xap/1.0/sType/ResourceEvent#\" xmp:CreatorTool=\"Adobe Photoshop 23.0 (Windows)\" xmp:CreateDate=\"2022-02-01T18:49:24+06:00\" xmp:ModifyDate=\"2022-02-02T14:28:57+06:00\" xmp:MetadataDate=\"2022-02-02T14:28:57+06:00\" dc:format=\"image/png\" photoshop:ColorMode=\"3\" xmpMM:InstanceID=\"xmp.iid:cac7f3cb-1398-8941-91e3-4f57ff4c424e\" xmpMM:DocumentID=\"xmp.did:8fcc2a70-4076-324c-a479-8beffdc5da84\" xmpMM:OriginalDocumentID=\"xmp.did:8fcc2a70-4076-324c-a479-8beffdc5da84\"> <xmpMM:History> <rdf:Seq> <rdf:li stEvt:action=\"created\" stEvt:instanceID=\"xmp.iid:8fcc2a70-4076-324c-a479-8beffdc5da84\" stEvt:when=\"2022-02-01T18:49:24+06:00\" stEvt:softwareAgent=\"Adobe Photoshop 23.0 (Windows)\"/> <rdf:li stEvt:action=\"saved\" stEvt:instanceID=\"xmp.iid:cac7f3cb-1398-8941-91e3-4f57ff4c424e\" stEvt:when=\"2022-02-02T14:28:57+06:00\" stEvt:softwareAgent=\"Adobe Photoshop 23.0 (Windows)\" stEvt:changed=\"/\"/> </rdf:Seq> </xmpMM:History> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end=\"r\"?>n\u0085\x05Q\x00\x00\x01\u00F6IDATH\u0089\u00B5\u0096\u00BBkTQ\x10\u0087\u00BF\u0088\u00F8\x16\x14\x14\x1F(\u0082\u0088\u00A2\u008D\u0088(\b[\u0089\x7F\u0080\u009D \u0082\x16\x16*\u0082`!\b>JS\u00A5\n\u00D6\x12l\u0082\u009D\u0082\u00B5H:\u00D9\u00C6\u00C2\x15\u00D3\u00F8\u0080h\u00C0\u00A8\u00E8\u00C6]\u008D\u00C9g\u00B1s\u00DC\u0093\u00B87\u00D9\u00EB\u00AE\x03\u00C3\u00DC{\u00CEo\u00E67g\u00EE\u009Cs\u00EE\u0080\u00CA\u00FF\u0096\u00E5%\u00B07\u0080=\u00C0z\u00A0\x0E\u00BC\x05nv\u00E38Pb%\u00DF\u0080u\x0B\u00FD\u00BBq\u00EC\u00B4\u0092\x0B\u00C0q`5\u0090g\u00B0\x02\x18\x05n\x01\u00D7\u0080\u00B3\u00C0\u00C3\u00C0\f\u00846\u0081\u00A7\u00C0\u00F0<_5\u00E9F\u00F5\u009D\u008B\u00CB``\u00AF/\u0081\u009BR\u00B7\u00A7\u00D89\u00C9x\x00*\u00D9X\u00AE\u009D\u00A4\x13\u00EEH\u00CCM\u00A4\u00B1T\u00AE\u0083\u00B4>\u00EAe`\u00AC\u00A0\u00B4W\u0080]\u00F1]\u00A6\u0081\u0089\x02\u00DC3\u00E0\fp\x1F\u00A8\x00c\u0089\u00FDt\u00B0\u00EF/\u00C8\u00AE\u00AC\u00EE\u008Cx\u0097T\u0096\x05{#\u00EC\u00AA\u0082\u00EC\u00CA\u00CA\u00CA\u00B0\u00DF\u0081?$?\u00C2\u00CE\u00F4\u0089$\u00C5\u00F9\t\u0080ZUgby_\u00D4\x07=\u0096jD\u00FD\u00985G5u\u00CD\x1BuX\u009D\x0E\u00ED\u0085dR\u009D\u008Dx\u00E3\u00A9\x05U/\u00C6\u00F3\u00BDEZ\u00B3[U}\x1C\u00CF\u00A7r\u0092W\u00EA\x1D\u00F5\u00B3Z\u00EF\u0091\u00E4\u0083\u00DA\u00B0\u00B5q\u009F'\u0092ZV\u00BF\u00A6\u00FA\u00A8G\u0092\u00D1H4I-M\u009C\u008C\u0081\u00C3=\x12$\u00DD\x17\u00F1\u00CE\u0099\u00ED\x13\x17\u00B4^\u00BFZXh\u00EF\u0093\u00B5}&\u00F9\x15v\r\u00B4\u008F\u00FA\u0097a+@\u00AD\u00C0\u00F1<\u00B0#\x1C\x1B\u00C0$p\u00B7\x00{4\u00EC\x0B`\u00DE)\u009C\u008E\u00F9C\x05u\u009E\u00F5o\u00E9\u0084;\x10sSi,\u009F\u00DC\u00A6~\n\u00C0\u009C\u00ED\u008D\u0099Tu(\u00B0\u00B7\u00E3}!&%\u00D2Tw\u00A7\u00D8\u00F9\u00CD\u00F8\x1E\u00D8\f\\\x05N\u00D0\u00BA\x19s9\x06l\x02\u00B6\x02[\u00809\u00A0\u009A\u00CD\u00A7\u009B\u00F1\t0D\u00FB\u00D0-u\u00C7\u00D7i7H\x1ExI)\u00F3\u00B72\b\u00EC\x056\x00_\u0081\u00D7\u00DD:\u0096Y\u00C9?\u00CBo\u0094\u00C9\u00D54\u0082\u00E1o\u00B7\x00\x00\x00\x00IEND\u00AEB`\u0082";
var imgBB = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x19\x00\x00\x00\x19\b\x06\x00\x00\x00\u00C4\u00E9\u0085c\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x04\u00EEiTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 7.1-c000 79.a8731b9, 2021/09/09-00:37:38        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:photoshop=\"http://ns.adobe.com/photoshop/1.0/\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stEvt=\"http://ns.adobe.com/xap/1.0/sType/ResourceEvent#\" xmp:CreatorTool=\"Adobe Photoshop 23.0 (Windows)\" xmp:CreateDate=\"2022-02-02T14:26:35+06:00\" xmp:ModifyDate=\"2022-02-02T14:28:26+06:00\" xmp:MetadataDate=\"2022-02-02T14:28:26+06:00\" dc:format=\"image/png\" photoshop:ColorMode=\"3\" xmpMM:InstanceID=\"xmp.iid:1e9addb4-6068-8248-8857-23cc4b3a3350\" xmpMM:DocumentID=\"xmp.did:1e9addb4-6068-8248-8857-23cc4b3a3350\" xmpMM:OriginalDocumentID=\"xmp.did:1e9addb4-6068-8248-8857-23cc4b3a3350\"> <xmpMM:History> <rdf:Seq> <rdf:li stEvt:action=\"created\" stEvt:instanceID=\"xmp.iid:1e9addb4-6068-8248-8857-23cc4b3a3350\" stEvt:when=\"2022-02-02T14:26:35+06:00\" stEvt:softwareAgent=\"Adobe Photoshop 23.0 (Windows)\"/> </rdf:Seq> </xmpMM:History> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end=\"r\"?>p\u0097\x16m\x00\x00\x03/IDATH\u0089\u00DD\u0096\u00C9o[U\x14\u0087\u00BFs\u00DF\u00E4\u00D8\u00F5\u00F02\u0091\u00A4\u00A8\u00932\u00AAQ\u0083\u00A0tC\x0B\u00AA\n\x0BX\x14\x16]t\u00C3\x06\u00F5/\u00EB\u00B6R\u00D9t\x01\u00FB\u00B2B]T\u00CA\x02T\u00A9j\u00A2$\x0E\nN\u00EC\u00C4\u00F6s\u00DEtY\u009CXI\u00EB\u00C4\x01\u00A9\u00DDp\u00A4'\u00DF\u00FB|t\u00BE\u00FB;\u00C3\u00B5\u00C5Z\u00CB\u00876\u00F3\u00C1\t\u0080\u00DB_T\x7F\u00DF\u00F8\x11\u00B8\r\u00C8{\u008A\u00FD\u00BC\u00F5\u00F9\u00C7\u008F\u00DF\u0082\x1C\x01~\u00E2\u00FD\u00A8\u00EB\u00D7`\x00\u00E2\x03.\"\u00E0\x07\u00AA\u00C7q\u00C0\x18H\x12\x10\u00D1}\u0096\x1D\x7FZ\u00ABO\x14\u00A9\u00DF\u00DB\u00E6\u00F7\x17'!\t\u0090\u0093\u00A6\u0086\u00CD\r0\x0E\u00B4\u00DBH\x12c\u00AB5$\u00CB\u00B0I\x02\u00BE\x0F\u00DD.\x14\u008B\n*\x16\u00E1\u00E2E\u0088\u00E3w\u0095$\u00A7A\u00D4<\x0F\u00EA\u00DBH\u00A3\u00A1A\x0E\x0E\u0090\u00C5E\x05\u00BEz\x05\u00D3S\u00D0l\u00C1\u00D5\u00AB\u0090\u00E7\u00E0\u00BA\u00D8\u00D9YU{F\u00A7\x0EB\u00F2\x1C\u00EE\u00DE\u00C5\u00FA>\u0094\x0B\u00D0M\u00F4\u0094\u009D\x0E|\u00F7-\u00D4\u00CA\u0090\x01i\x0EI\u00AC\u00A9\x12QE\u00ED\u00B6\u00AE\u00CF\u0085\u008C\u008C \u00CF\u009E\u00C1\u00D6\x16\u0094J\n\u00A8\u00D5`b\x02^\u00BC\u0080\u008F&\u00F5\u00D4Y\x0E\u00F3\u00F3\u00D8(B\u00D6\u00DE\u0080\u00B5\u00D8\u00AF\u00BF\u0081\u00E9i\u00E8\u00F5\u00CE\u0081$\tvn\x0E\u00E6\u00E7`\u00AF\u00A9E\u00F6<\bC\u00A4P\x00\u00CF\u00C3\x16\x02\u0088z\u009A\u009Ek\u00D7\u00B0\x17JP\u00A9B\u00B5\u00AA\x078WI\u009A\u00C2\u00F88\u00EC\x1F\u00C0\u00E4\x04x>\u008C\u008D)<\b4\u009DQ\u00A4>#E\u00F5_\u00BA\x0E\u00CD=\u0085\u00A6\u00E9@\u00CANO\u00D7\u0093'p\u00E9\x12t;\u00F0\u00C7\u009Fp\u00F3&\u00AC\u00AFA\u00A5\x02;\x7F\u00AB\u00B2\u00A8\x0B33P.\u00C3\u00EA*\u0094+\u00D8\u0087\x0F\u008F\u00DBz(\u00A4\u00DB\u00C5>z\x04\u0085\u0082\u009EZD[6\u008A \f\x15\u00D0\u00EE@\u00AB\t\u008D\x06LM\u00C1\u00ED;\u00EA\u009Be\x03\u00E1N\u0087\u00B8.\u00F2\u00EB/X\x04\u0089c\r\u009Ae\u00AA*\u00CB!\b\u00B0s\u00B3p}Y;\u00AA\u00D7;\u00B3u\u00FB6x\u0085x\x1ET\u00AA\u00C8\u00D6&8F'\u00D9q\u00B033:t\x07\u00FB\u00C8\u00FA:\x04\u0081\x16\u00D9\x18U\u0091\u00E7gB\x06\u0095D\x11vy\x19VVt\x1F\u0086\u00D0ljWy\x1E\u00DC\u00BA\u00A5\u0081\u00B7\u00B7\u008F\u00AF\x12c\u0086\u00AA9\u00BD\u00F0??\u00D591\x06FGuV\u00D2\x14\u00FB\u00E9gp\u00D8C66\u00F5\u00DD\u00CE\x0E\\\u00BE\u008C}\u00F0\x00\u00F6\u00F7\u00FF\x03\u00A4\u00D7\u00C3~\u00FF\u0083\u00D6!\u008E\u00C1s\u00B5\u008D\x1B\r\u00ED\u00A44\u00C5.-\u00C1\u0085\u00B2\u00FA\u00F4\x0B\x1E\u008Ej\u00C7u::[C!\"\u00C8\u00CB\u0097\x10\u00F8X\u00CFG\u00F6v\u00A1\x16\u00EA\u009C\u00D4\u00B7\u0090Z\u0088\u00DD\u00DDE\u00F2\\S4>\x0E\u00F5:\u00FC\u00B5\u008D]\u00F9\x04\u00AE\\\u00D1N\x1C\n)\u0095`\u00ED\r\u00B4Z\u00C8\u00E8\x18\u00EC\u00ED\u00C2\u00C2\"\x18AVW\u00E1\u00C6\r\u0088\x13x\u00FD\x1A\\G\u0095\x05>R\u00AF\u00C3\u00C4$,,\f\u0085x\u0080\u00A1\u00D3\u00C1\u00DE\u00BF\x0F\u00AE\u00A7\u009Df\f\x1C\x1E\u00AA\u00C7\u0097_\u00E9ub\x04{\u00EF\u009E\u00A6*\u008E!\u00CB\u00B0_\u00DC\u00D1t5\x1A\u00E08r\x14o\x00\x12\x03\x19\u00D6\x1A\u0092\x14\u0092T\u0087\u00F0\u00A4\u009D\u00DC\u00BF\u00FB]\u00FF Z\x0F{\x14o\x00\u00F2\x1B\u00FA{(\u00E7\r\u00D7\u00BF\u00B4\u00E7\u00FD\u0085\u00FCo\u00FE\x12\u00FD\x03\u00AD\u009B`F\u009C~\u00C6\u00C6\x00\x00\x00\x00IEND\u00AEB`\u0082";
var imgExp = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x19\x00\x00\x00\x19\b\x06\x00\x00\x00\u00C4\u00E9\u0085c\x00\x00\x00\tpHYs\x00\x00\x0Eu\x00\x00\x0Eu\x01\u00B9cQ2\x00\x00\x05\u00BBiTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 7.1-c000 79.a8731b9, 2021/09/09-00:37:38        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:photoshop=\"http://ns.adobe.com/photoshop/1.0/\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stEvt=\"http://ns.adobe.com/xap/1.0/sType/ResourceEvent#\" xmp:CreatorTool=\"Adobe Photoshop 23.0 (Windows)\" xmp:CreateDate=\"2022-02-01T19:18:52+06:00\" xmp:ModifyDate=\"2022-02-02T14:27:50+06:00\" xmp:MetadataDate=\"2022-02-02T14:27:50+06:00\" dc:format=\"image/png\" photoshop:ColorMode=\"3\" xmpMM:InstanceID=\"xmp.iid:61b8721f-7c73-e046-b226-7feffd348607\" xmpMM:DocumentID=\"xmp.did:1b93b0fe-aefc-cd41-a4fb-ca9f4f3a48d8\" xmpMM:OriginalDocumentID=\"xmp.did:1b93b0fe-aefc-cd41-a4fb-ca9f4f3a48d8\"> <xmpMM:History> <rdf:Seq> <rdf:li stEvt:action=\"created\" stEvt:instanceID=\"xmp.iid:1b93b0fe-aefc-cd41-a4fb-ca9f4f3a48d8\" stEvt:when=\"2022-02-01T19:18:52+06:00\" stEvt:softwareAgent=\"Adobe Photoshop 23.0 (Windows)\"/> <rdf:li stEvt:action=\"saved\" stEvt:instanceID=\"xmp.iid:61b8721f-7c73-e046-b226-7feffd348607\" stEvt:when=\"2022-02-02T14:27:50+06:00\" stEvt:softwareAgent=\"Adobe Photoshop 23.0 (Windows)\" stEvt:changed=\"/\"/> </rdf:Seq> </xmpMM:History> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end=\"r\"?>\u00B1\u008B\u00D66\x00\x00\x01pIDATH\u0089\u00DD\u0096=K\\A\x14\u0086\x1Fu\u00FF\u0080 \u0084\x15,lm\u00C4\"\"\u00C2\"(Z\b6\x01\u00C5F\u0084\u00D8\u00E7\u00CF\u00D8h!X\u00F9\x05\n\u00A6\x11DEIa!X\u00A8\u00A0?\u00C0\x10B\u009A`\x13T\u00DC\u00C7\u00C2\u00B3x5\u00D7\u008F{\u00F7n\u00E3\x0B\x07\u00E6\u00E3\u00CCy\u00E6e\u0098aP\u0089\u00F8\u00ACn\u00A8U_\u00D7qb\r\u00EA\u00F4\x0ByW\x11\u0087%\x1E4\t,G\u00FB\x1Fp\t\b4\u00F1\u00BFN\u009E\u00F5\x7F\x03\u00E7@\t\u00A8\u00C6\u00FA\x1B\u00A07\u00E6\u00FBP\u00BB\x12\u00F4\u00B1g\u00BB\u00CC\x1BsIG\u00A8\u00DB\u00D1\x19)\b\u00B0\x18\u00F5\u0096\u00D4}\u00F5\u008E\x18\u00F8[\x10`=\u00EAmE\u00FF\u00BB\u00D1P=+\x00\u00B0\x1A\u00B5~$\u00C6NU\u009B\u00E3pZR\x0E8\u008B\u00D6\u0081\t`\x07\u00A8$\u00C6\u00AB\x005'\x17\x0588H\u0099\u00FB\u00A5ZJ\u00D9U\x16\u00AD\x01\u00E3\u00C0\x1E0\u00942?\x03t\u00D6\u00E3d\u00E5\x15\x07O\"/d-\u00D6\u00ED\u00BE'?\x0F\u00A4\x06x\u00D3A^\u00C8f\x16\x07\u00EA\u00BCz\u0094\u00F5\u00E0\u00AF\u0080-`\u00F4\u009D\u00F9_\u0080\u00B6\u00AC\u0090\u00A9\u008C\u00F9\u0097@[\u00F3\u009Bi\x05\u00E8\u00E3AlP}\u0093\u0090\u00BB\x06An\u0093\u0090\u00F6\x06A:j\u0090\x03\u00A0\u0095\u00A7Ot\x11\u00EA\x01\u00CA\u00C01jw\u00DC\u00E2ku0\u00C7C\u0099\x16\x15\x1F~*\u00AA\u00FDM*\u00C0W`!v\u00F0\x07\u00F8Y\u0087\u00832\u00F0)\u00DA\u00DF\u0080\u00D9$}\u00C0\u00C7OE\u00BD\u00DAS\u0087k\u00B5\u00EF\x01\u00F7\u00A3\u00FB\x1D\"\u00B6P*\x00\x00\x00\x00IEND\u00AEB`\u0082";
var imgExpAlpha = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x19\x00\x00\x00\x19\b\x06\x00\x00\x00\u00C4\u00E9\u0085c\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x05\u00BBiTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 7.1-c000 79.a8731b9, 2021/09/09-00:37:38        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:photoshop=\"http://ns.adobe.com/photoshop/1.0/\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stEvt=\"http://ns.adobe.com/xap/1.0/sType/ResourceEvent#\" xmp:CreatorTool=\"Adobe Photoshop 23.0 (Windows)\" xmp:CreateDate=\"2022-02-01T19:37:18+06:00\" xmp:ModifyDate=\"2022-02-02T14:29:09+06:00\" xmp:MetadataDate=\"2022-02-02T14:29:09+06:00\" dc:format=\"image/png\" photoshop:ColorMode=\"3\" xmpMM:InstanceID=\"xmp.iid:2654b133-9320-8045-a237-8415942def61\" xmpMM:DocumentID=\"xmp.did:36330f84-9548-834d-88a9-674ca9799736\" xmpMM:OriginalDocumentID=\"xmp.did:36330f84-9548-834d-88a9-674ca9799736\"> <xmpMM:History> <rdf:Seq> <rdf:li stEvt:action=\"created\" stEvt:instanceID=\"xmp.iid:36330f84-9548-834d-88a9-674ca9799736\" stEvt:when=\"2022-02-01T19:37:18+06:00\" stEvt:softwareAgent=\"Adobe Photoshop 23.0 (Windows)\"/> <rdf:li stEvt:action=\"saved\" stEvt:instanceID=\"xmp.iid:2654b133-9320-8045-a237-8415942def61\" stEvt:when=\"2022-02-02T14:29:09+06:00\" stEvt:softwareAgent=\"Adobe Photoshop 23.0 (Windows)\" stEvt:changed=\"/\"/> </rdf:Seq> </xmpMM:History> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end=\"r\"?>\u00E6\u00D8`\u009A\x00\x00\x02\x15IDATH\u0089\u00AD\u0096OHUA\x14\u00C6\x7F\u009Ae-\u008A\u0084B4J\u00DE.\"\x12\u0083$\"\t\u00E4%\x04\x05\"\b\x15\u0085a\u00D0N]\u00B8h\x13-Z\u00BA\u00ACM.\u00A4Ea\u00D1BA\x17\u0085\u008B\u00C8\nB\f\u0085\u0090j%\b\u00AFD\u00A20\x17=\x0B|\u009F\u008B{.M\u00E3\u009D+\u00BCw?8p\u00FE\u00CC\u00F9\u00CE\u00CC93\u0097\u008B$LNI\x1A\u0093TR:\u00E6\u009C\x1C$\u00F5\x04\u00D6\u00AD\u0099\u00BC\u00AF!\u00C2e\u00E0\u00A9\u00E9E\u00A0\x00\b\u00A8b+>z\u00F6\n\u00F0\x19\u00A8\x01J\u0096\u00FF\x17h\u00B5\u00F8i$\x1Ds\u00AA_\u00F2vY\u00AE<tO\u0084\u00A4)3:2*\u00F0\u00C8\u00F8F%\u00BD\u0096\u00B4\u00819V3*0n|/\u00CD\u009E\u0090\u00A4x&\u0085\u0084\u00DE\u0097\u00831\u00E0\x17p\u00C3\u00EC\x1C6,\u0080\x1D\u00DB$\x1F\x01N\x00\u00D5\u00C0\x02\u00B0h\u00FEZ`/\u00D1%\u00D9\x03<6\u0089Q\x02\u0088\u00DB\u00F5%\u00A5\x05#\u00926\u00F4?\u00EE[lXR\u00D1\u00E4MB\u00EE\u00B2\u00DB\u00AE\x10\u00DE\x02g\x13\u00FC}v\u00AA<\u00B0\u00DB|\u00A3\t\u00EBn\x02\u00B9\u00B4\u0093\fz\u00BB\x1F\u0097t\u00CBn\u008C\u008F\x1Fi\x17\"\u00AD\u00C87\u0087\u00E4\u0083\x17+xE\u00EE\u0094S$\u00E7\u0091\\\u00F7\u00E2\x03N\u00EC\u00B7\u00A4}iEB3i\u00F2\u00EC%\u00CF\u009Eu\u00F4'\u00C0Z\u0080g\x188\u00B9\u00DD\u00E0c\u00EC\u00F4\u00EC\u008B\u008E~0%\u00AF\x0B8P\x1D\b.zv\u00DE\u00D1w\x01\u00FD\u008E\u00DD\t\x1C\n\u00F0D\u008F<e\u00F0KN\u00DF\u00D7%\u00E5%\x1D\u0097\u00F4N[\u00B1`sk\u00F28\u00E6eJ\u00A8\u00C8\u00D5\x042\x17\u00F7\x12|\u00D7\u0092\u008A\u0084\u00DA\x05\u00D1\u00E3\x1A\n\u00C4\u00BA\u0081\u00BB\u00C03\u00CF_LZ\x1C\x0F^\x01\u00B2\u00DB\u00C0\x0B\u00E0\x02\u00B0\x1FX\x06\u009E\x03\u009F,~\x05\u0098\x04\u008E\x02?\u0081i/?\u00E2uz\u009A\u00C5\u00A7\u00DE\u0097\x19\u00B7]\u008D\u0081\u0093T\u008A\u00C3\x10}\u00E4\u00A6\u0081:\u00A0-\u00E3\x02-@\x030\u0087\u00A4fk\u00D9\x1FI\u00ED\x19\u00B5\u00A9M\u00D1\u009F\u008A$\u009D\u00A9\u0092\x04\u00D0\x0B\u008C\u00D8\x0E\u00BE\x03_+8A\x03Poz?\u00F0\u00C0\u00AD~N\u00FF~**\u00C5+I\u00E7c\u00EEM$\x00\u0086\x04\u0087jT\\\x00\x00\x00\x00IEND\u00AEB`\u0082";
var imgAeTemplate = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x19\x00\x00\x00\x19\b\x06\x00\x00\x00\u00C4\u00E9\u0085c\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x05\u00C9iTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 7.1-c000 79.a8731b9, 2021/09/09-00:37:38        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:photoshop=\"http://ns.adobe.com/photoshop/1.0/\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stEvt=\"http://ns.adobe.com/xap/1.0/sType/ResourceEvent#\" xmp:CreatorTool=\"Adobe Photoshop 23.0 (Windows)\" xmp:CreateDate=\"2022-02-03T17:55:25+06:00\" xmp:ModifyDate=\"2022-02-03T17:57:58+06:00\" xmp:MetadataDate=\"2022-02-03T17:57:58+06:00\" dc:format=\"image/png\" photoshop:ColorMode=\"3\" xmpMM:InstanceID=\"xmp.iid:8387ca47-2e9a-1e4f-a526-c1ecc77cdb6b\" xmpMM:DocumentID=\"adobe:docid:photoshop:94b99eca-1aa0-ba43-8749-3e326d13b927\" xmpMM:OriginalDocumentID=\"xmp.did:c861ccf6-b803-6848-846b-d4d73e8f2219\"> <xmpMM:History> <rdf:Seq> <rdf:li stEvt:action=\"created\" stEvt:instanceID=\"xmp.iid:c861ccf6-b803-6848-846b-d4d73e8f2219\" stEvt:when=\"2022-02-03T17:55:25+06:00\" stEvt:softwareAgent=\"Adobe Photoshop 23.0 (Windows)\"/> <rdf:li stEvt:action=\"saved\" stEvt:instanceID=\"xmp.iid:8387ca47-2e9a-1e4f-a526-c1ecc77cdb6b\" stEvt:when=\"2022-02-03T17:57:58+06:00\" stEvt:softwareAgent=\"Adobe Photoshop 23.0 (Windows)\" stEvt:changed=\"/\"/> </rdf:Seq> </xmpMM:History> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end=\"r\"?>\u00F9\u00E8\u00B3\u00A7\x00\x00\x05\u0086IDATH\u0089\u00B5\u0096Yl\u0094\u00D7\x19\u0086\u009F\u00F3/3\u00DEf<\u009E\u00DF\x036\u008C\u0089\x136\u00B3\x19l\u0083'v\u008Cp\x10MirS\u00B7\u00AA\u0088\x145\x17\u00A0\u00E4\"j\u00A3JI\u00AB\u00A0J\u0095J/Z)\u00A2\u0089R\u00F5\u00A2\x17\\4jK\u00A5\u008A\x06\u0092T\u0089E\u00CBR\x14\u00A8\u009C\u00B8\u00B5\u00C0\u00D8\u00C0\x04\u009B\u00827\u00BC\u008C\u00C7\u00F3\u00CFf\u00FF\u00CB\u00D7\x0B7&\u0096s\x11Z\u00E5\u00BB:\u00E7|:\u00E7\u00D1{\u0096\u00EF=*au\u008D\x02!\u00BE\u00BA\u00B0\r`\u00CDW\b\x00\bi\u0080\u00FDE\x19\x11\u00C1\u00F3<<\u00CFC\u00C4\u00FF\x7F \u00B6\u00B1rL\u00A1i\u008A\u00D9\u00F4\fE\u00C7E\x01\u00A6\u00A1\x11\u008DT/\u00C1\x1F6V@\u0094\u0082\u00F1\u00E9Q\u00BA\u00BE\u00F6,\u00CF\x1Ch\u00C7\u00F7\u00E1R\u00CFuN\u009E>\u0081U\x15{h\u00C0\x17B\u008A\u0085\x02\u00A5\u00812\u009E\u00FD\u00E6\x0B\u00B4\u00EE-\x03\x07\x1E\u00AD\u00DBC\u00F7\u00853\u00D8Y\u009BP\u00C5\u00CA;\"\"\u0088\bJ)\u0094R+\u00F2\u00DAr\x15\u008A\u00A9\u00DC$\u00AD;\u00DBiX_\u00C6@\u00AFK\x7F\u009FC\u00BC\x16\u00DAZ\u00F623?\u00B5\u00B4\u0088R\nMiL\u00A5&\x19I\u008D\u0092JO1\u0092\x1Aerfb\x05l\u00B9\x12\x11<\\\u00DAvw\x12\u00AE\u0083\u00F3\u00A7\u00FE\u008A\u00A6il\u00DF\u00F3\x14\u0089\u00E6N\u00FE|\u00F6$\u00BE\u00E7\u00A3\u00E9\x1A\u00BE\u00EF3\u0096\u00BA\u00C7\u00AE\u00CD\u00EDt}\u00FD kk\u00D7q\x7Fj\u008C3\u00DDg\u00F9\u00E4\u00FA\u00DF\u00A9\u008D\u00AE]\u00DC{d\u00B9\x12;gSo\u00AD\u00E7\u00F1\u00A6\x0E\u00C8\u00C2\u00F9\u00CB\u00DD\\\u00EA\u00F9\x1B\u0092\u0085\u0096\x1D\u00CDl\u00AA\u00DB\u00CA\u009C=\u008BB1\u0096\x1A\u00E1`\u00C7\u00B7\u00F9\u00C3\u00AF\u00DE\u00E2\u00F0\u00E1\u00A7im\u00DC\u00CE\u00F3\u00CF=\u00C5\u00DBo\u00BD\u00CE\u0081\u00F6\u00A7\x19K\u008D\u00F0\u0099\u0098%\u0088R\u008A\u00E9\u00E2\x14{v\u00B5\u00B1c[\u0090\u00C1\x01\u0087\u00FE\x1B}\f\u00DC\u00BCJ\u00F2S\u008FM\u00EB\u00A1\u00B5\u00E9\tf\u00DD\x14\u00E9\u00B9Y6\u00C6\x1B8\u00F6\u00EAQB!x\u00F9\u00957\u0088>S\u00C5\u00F7~x\u009C\u00F2*\u00F8\u00C1\u0091\u00D7\u00B0\u00C21\n\u0085\u00FCr\u0088\u00EF\u00F9\x04\b\u00D0\u00BE{?Z\x18z\u00FB\u00FB\u00C8\u00B9Y\u00D2\u00B94}\x03\u00FDP\nm-\u009DT\u00A8\x10\u00D3\u00CE\x14{[\u00F7S\u00BB\x1A\u00AE\r,\u0090\u00CD\u00A5\u00D9\u00B7\u00F1\x1B\u00E8\x1A\u008C\u00DD\u0081xm\u0090\u00CD\u008Fm\u00C5\u00CEe\u0096\u009F\u00C9\u00AC\u009Db\u00F3\u00BAm\u00B4463\u00FE)\u00EC\u00DC\u00DA\u00C8\u009F~\u00FD!\"\x10*\x0B3:\x04\u008D[6\u00B1m\u00E3N>\u00B8u\u009Ah\u00C4\u00A2X\x04\u0094\u00CE\u009B\u00C7~J\u00B8\x02\n\x05\u00C8\x16 \x18\u0084\u0092`\t.\u00EE\x03\u0088R\u008A\u00B4\u009B\u00E2P\u00CB\u00F3\u00C4k\u00E1\u00DE(T\u0094\x05\u00A9\u00AE\n.^\u00EBy\u00C8\u00E5a\u00DDZH4w\u00F0\u00DE\u00AD\u00DFR\u009C\u009F\u00A7\u00A4\x14\x14\x1E/\u00FE\u00E8(\u00A9\u00F4\x14\u00D1J\u008B\u00D4\\\u009A\u00CAP9ss\x19\u00ACp\u00EC\x01\u00C4q\x1C*\u00F5*\u00DAZ\u009E\u00A4\u00B4\x1C&\u00A6'\u00F8\u00C9\u00EB\u00AF,\u009E\x15 \u00C0\u00B1W\u008F\u00B3iC\r\u0089\u00A6}X\x7F\u00AC\u00A7\u00A7\u00F7\x12\u00F9\u00ECw\u00A8\u00AF\x0B\u00B0\u00A1~#o\u009F\u00BE\u0080\u00A1\fZ\u00B6\u00B7\u0090/\u00CCsg|\u0088X\u00D5j<\u00CF\u0085\u0084\u00D5\u0095\u0089\u00B3[^\u00E8\u00F8\u0099H\u00AF\u0088\f\u008B\u00BCy\u00E4\u008C\x04\u0088K\u0083\u00D9)\rf\u00A7\x04\u0089\u00CB\x1B\u0087\u00CF\u0088\f\u0089H\u009F\u00C8K\x1D\u00BF\x10\u008D\x1A\u00F9\u00F9s\u00A7D\u00AE\u0088\u00C8U\u0091t\u00B7\u00C8\u00F8\u00BB\"2!r\u00E2\u00E5\u00F3\x12\u00A1A\x12V\u0097$\u00AC\u00AE\u008C\x1E/\u00DBr\x14%\u00C1\x1Ak\r\u00B7\u0092I\u00BA\u00FF\u00F21\x17\u00AF\u009C\u00C7tL\u00C2\u00E5\u0095\u0094\x04K)\u00912\u00D2\u00E9Y\u00EC\u00FB\x1E7\x07\u0093\u008CN\u00CEpc\u00F8:\u00FF\u00B8v\u0091{\u00C3\x05\u00EC\u0094\u00C7\u00E4L\u0096\u00D1\u00F1\u00FB\u009C{\u00EF2\u00A7>8\u0085Z\u0080\u0080\x11\x00XP\t\u00AB+\u00E38\x0B\u00A1\u00CAP\u0084U\u00B1\x18\u00BA\u00A63\u0090\x1Cd\u00DA\u009E$\x1C\u00AC$;\u009F%\u00A8\x05\u00B1\u00FD92\u00E4\u00C9\u0093\u00A3\u009C\x12\x0E\u00B5~\u0097\u0082\u0093\u00E7\u00E4\u00BFNPJ%q}\r\u008E\u00E71\u00C2\x18a*\u00D8\\\u00BD\x05\x14\u00F8\u00BE\u00BFX\u0085\x1D\u00CF!7\u009F\u00E3\u00C8\u00A1\x1F\u0093/\u00E6\u00F9\u00DD;\u00BF'\x11y\u0082\u00FB\u00D3\u00E3l\u00D9\u00B0\x1D\u00CFs\u00C9\x15\u00F2\u00DC\u00B9w\u009B\x1D\r\u00BBH\u00FE\u00FB\x06;w4\u0093/\u00E6\u00B1\x0B6\u00BA\u00A6\u00B3\u00BF\u00ED \u0085b\u009Es\u0097?\u00A4i\u00DB\x1E>\u00FA\u00F8\x02\u00F9b\x1E\u00D30Q\t\u00AB+\u00A3\u00EBFhp\u00F2\x1A\u00DF\u00FF\u00D6k\u0098f\u0080\u00EA\u00A8\u00C5\u00FAG\x1Ec\u00CE\u00CE\x12\u008DX\f\u00DFMR\x1D]M\u00C0\f2t7\u0089i\u0098\u00D4\u00AD}\u0084\u0081[W\u00A9\u00AB}\x14\u00D7s\x00\u00C1\x17!\x18(\u00A1>\u00BE\u009A\u00E3\u00BF\u00F9%\u00FF\u00EC\u00EF!\x1A\u00A9^T\u00E2y.Q\u00C3\"W\u00C8\u00E0e]\x1C\u00B7H:3\u00C3tj\x1A\u00D30I\x0E\u00DF\u00C0\u008A\u00C6\u00D8\u00F7\u00F8\x01VY\u00AB\u00F8\u00E8\u0093\u008B\f\u00DDM\x12\u00B3V\u0091+\u00D8\u00DC\u00BC=H\u00A1\u0098#f\u00D5\x100M&&osw\u00EC\x0E\u00E5e\u00A1\u00E5\u008F1\x16\u00A9\u00E1\u00C2\u0095\u00B38\u00CE\x02J)\u00A2\u0091j\u00E62\u00B3\b\u00A0k:\u00BD\u00FD=8\u008ECcC\x13\u00EF\u009F{\u0087\u0080\x11 `\x06)\t\u0096 \",8\x0B\x04\u00CC\x00\u008E\u00EBP\x19\u008A\u00E0\u00BA.\u00C1\u00C0\u00E2;S\t\u00AB+\x03\u0084\u0094R\u00B8\u00AE\u008BR\nA\u00F0\\\x17\u00C30\u00FE\u00EB\x13\x1A\u0082 \u00BE\u00E0\u00F9.\u0086n\u00A04\r\u00F1}|\u00DFG\u00D34\u0094R\u00F8\u00BE\u008FR\n\u00D7\u00F3\u0096\x00|\u00DE~E\x04]\u00D7\u0097*\u00B2\x1Ex\u00D0\u00FE\u00AC*x\u00B8\u00A0\f\f\u00C3\\\u00B4a]\u00E3sS\u00D0\u00B4\u00C5\u008E\u00AE/w\x10\u0083/\u00F9\x1D\x12\x114MG\u00E3\u00A1}>d\x00c_\x16\u00F4?\u0086\u00FD\x1FP\u00FAk\x03\u00FE\u00A7l\u008D\x00\x00\x00\x00IEND\u00AEB`\u0082";
var imgUberscript = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x19\x00\x00\x00\x19\b\x02\x00\x00\x00K\u008B\x124\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x05\u00C9iTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 7.1-c000 79.a8731b9, 2021/09/09-00:37:38        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:photoshop=\"http://ns.adobe.com/photoshop/1.0/\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stEvt=\"http://ns.adobe.com/xap/1.0/sType/ResourceEvent#\" xmp:CreatorTool=\"Adobe Photoshop 23.0 (Windows)\" xmp:CreateDate=\"2022-02-03T17:50:52+06:00\" xmp:ModifyDate=\"2022-02-03T17:57:36+06:00\" xmp:MetadataDate=\"2022-02-03T17:57:36+06:00\" dc:format=\"image/png\" photoshop:ColorMode=\"3\" xmpMM:InstanceID=\"xmp.iid:09e52559-182a-6846-9451-38ca44db132f\" xmpMM:DocumentID=\"adobe:docid:photoshop:e7b62d50-a673-c54d-845d-48dee527aa07\" xmpMM:OriginalDocumentID=\"xmp.did:f79e22f5-e2d3-ce4a-a883-7feea4cd16f3\"> <xmpMM:History> <rdf:Seq> <rdf:li stEvt:action=\"created\" stEvt:instanceID=\"xmp.iid:f79e22f5-e2d3-ce4a-a883-7feea4cd16f3\" stEvt:when=\"2022-02-03T17:50:52+06:00\" stEvt:softwareAgent=\"Adobe Photoshop 23.0 (Windows)\"/> <rdf:li stEvt:action=\"saved\" stEvt:instanceID=\"xmp.iid:09e52559-182a-6846-9451-38ca44db132f\" stEvt:when=\"2022-02-03T17:57:36+06:00\" stEvt:softwareAgent=\"Adobe Photoshop 23.0 (Windows)\" stEvt:changed=\"/\"/> </rdf:Seq> </xmpMM:History> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end=\"r\"?>x\x16\u00A6\u009F\x00\x00\x05qIDAT8\u008D\u00AD\u0095}l\u009De\x19\u00C6\x7F\u00F7\u00F3\u009E\u00F7\u00F4\u00B4\u00A7\u00E7\u00A3\u00EDzZ\x1A\u00BA~m\u00ACt5\u00A1\u0086\u00B5i\u00B7v\u00D9V*\u00CA`N\u00BAM9\u009BsJ`\x03\u00E3\u00C7tC1$\n\u0088\u0082\x1B\x1F\u0081Ee\t&\u00C0\u00A6$\x12F\x1CE;\x11p\u00A4\u0086\u00CD\x15ue\u0086a\u00BB\u00A6T\u00E8\u00C7v\u00DA\u00EE\u00B4\u00EB\u00E9y\u00DF\u00F3\u00DE\u00FEqzD\u00FD\u00DB\u00FB\u00AF\u00FB\u00B9r?\u00D7}?W\u00F2\\\u00B7D\x1B;\u00F9?\u0085\u00EF\x7F\x01U<\x0F\u00C0\x18\u008C\u00F9\u00F8\u0098\r\u0091\u00C5\x1Ac\x16\x11\u00CFC$\u008B\u00E7\u00B8\u008C\u00C1\u00F3\x18\x1F\u00C7u\t\x06q\x1CT)/'\u0093ar\x12UD\u00F0<\u00CA\u00CAH\u00A7\u0099\u00B8DI\u0094\u00A2\x12\x12\x17I\u00CCP\u00B6\u0084`\x10\u00D7\u00F5-vs\x1C\u00C6\u00C6h[\u00A3\u009F\u00DF\u00A6UU\x18#\x7F|\u00D3<\u00F9\u00A4.]\u00AAw\u00DCI4\u00AA\u00910\u00B6\u00DF<\u00F1\u00B8\u00AE\\\u00C9\u00FAfy\u00EC0}o\u00D2\u00B6V\x7F~7\u00BF\u00ED\u0093_\u00FD\u0092\u00E2\u00E2\u00DC\u00A8\u00E3\u00E3\u00FA\u00D9n\u00EF\u00E5\u00A7\u00B5k\x03\u00A3\u00A3\x00m\u00AB\x01\u00F2\u00F3u\u00D7Vmo'XHE\x05W\u00AEH\"\u00E1\u00DD\u00BCN\u00B7l\u0095\u0085K\u00FA\u00B5\u00AFk\u00D7j\x19\u00BE@&\u0083\u0088\x0F`j\u008A\u00FAz}\u00F8~\u00DE\u00FD\u00D0\u00C4w\u00CA\u00C0[\u0090\u00AF\u00C5\u00E5j\u00DB\x04\x02\x18\u00E4\u0099g\u00CC\x0F\u00BF\neZ[\u00C7{\u00EF\u00C9\x0B\u00B7\u00E8\u008D7\u00EA\u00DE\x1F\u00EB\u0086\x16\u00B9\u00EFi^\u00ED\u00E1\u009A\x15x\u009E\x15\u0088\u00D521\u00C1\u00A6M\u00BA\u00B9\u00CD\u00EC\x7F\u0088\u00D7_\u00D3{\u00BE\u00AFm\x1D\u00D4.\u0093\u008B\x13X>\u00FD\u00D4F\u00B1|Z^\u00A7k\u00DAe|\u008CDB\x06\u00FE\u00A6\u009D7x\u00F1.s\u00FC\u00A4<\u00F8\x03\u0096\u0094b\u00DB9\u00EDU\t\x16\x02\\\u009C$\x1C\u00D1\u00CFuS]A\x04\u00B9\u00F5\x0E\u00DE\x7F\u009F\u00A9\x19\u00AD\u00AF\u00A7\u00B9\u0099\u00C9I\u00F9S\x1F\u00AE\u00CBT\u0082T\n?\\J07GI\t\u00AA\u0080\x01\u00B0}\f\x0F\x03\u00BA\u00F1&\u0092\u0097\u00CD\u00AA*y\u00E8\x11lp\x1C|>*\u00CB\u00A5\u00B7\u00D7\u00AC\u00BA\u00DE\u00EC\u00FA\x1233d2\u00FA\u009D\u00FB\u00B8\u00EA*\u00F3\u00B3Wt\u00E7&\u00DDv\x1B\u00C3\u00C3XVn\u00AE\u0092%\u00BC\u00F1\u00BA\x1C\u00FB\u00B3\u00B7g\u00B3)\f\u00C9\u00B1\x17in\x01\u00F0\u00FB\u00F1<J\x05c\x18\x1B\u00C3\u00EFgz\u009A\u00F8vo\u00F7Fs\u00E0\u0088\u00F9\u00DE=\u0099\u00B5g\u00F5\u00E0\u00FD2\u00F0W>\u00FC'\u00D1\"+\x10\u00AB%/\u008F\u00D9Y\u00E9{K\u00E6}\u00DA\u00DC\u00AC;\u00BE@(*G\u008EK\u00CFo(*\u00D6k\u009B\u00E4\u00CC;r\u00EA\x14\u00AE\u008Be\u00F4+\u00B7c\u00E7\u0099\x07~$\u00A3\u00FD22\u00A5\u00B7\u00AC\u00E3\u00B2#}}\x14\x14\u00C8\u00E2\x1F\u00B2mFF\u0088Dhh`\u00EC#Dp38\x0E\u009EG,F:\u00AD\u0095Ke~\u009E\u00BC<\u00AD\u00A8\u0090\u00E7\u008E\x12\u00B0u\u00DB\x16\x19x\u0097w\u00FEBu\x15\u008E\u0083\u00EBZ\u0081X-\u0080\u00E3\u00B0\u00B0\u00A0O\x1D\u00D2/\u00EE\u0094\u00A7\x0E1\u00FA\u0081\x1E9J:-\u00BF{U\x7Fr\x00\u009FM\u00D5\u00D5\u00BA\u00FB.\u00ED\u00E8\u0090\u00C4\u00A4\u008C}\u00E4\x1D8\u00C8\u00F5\u009F\u00D4\u009B7\u00E1yr\u00A2\u0097H$\u00A7=\u0090H\u00D0\u00B6\x1A'\u00CD\u00D0\x05\u008D\u00DFF:\u008D\u00DF\u008F\u00A7\u0088h\u00AC\f\u00CB\u0098{\u00EF\u00963gdp\u00D0\u00EC\u00BDS\u00F7~\u008BP\u00A1\u00D5\u00DAj\x1EyX\u00F7\u00EF\u00A3\u00A5\u0085D\"\u00C7e\f\u0097/\u00EB\u00BAu\u008A\u00C8\u00B9s\u00B4w\x10,\u00C4u\u0099\u0099f\u00E1\"\u00A9\x14>\x1F\u0080\u0093&\u0095\u0082\x02jj\u00A4\u00B7W\u0099\u00E0\u00E4I\u0092\u00B3Z[\u00CB\u00FC|\u008Ekn\u008E\u00EAjZ[))!\x1A\u00D1k\x1Bhld|\u009C\u008EvV\x7F\u009A\u00E5\u00CB\x19\x1D\x05\u009Bp\u0098\u00E2\"X\u00A0\u00BF_\u00E3\u00DBi\u00D8\u00A0{\u00EE\u00C2\u00F3\u00E4\u00F4\u00E9\u00EC\x1B\u00AD@\u00AC\u0096dR[Z\u0088\u0095Z;vp\u00EC%mo\u0097\u00A1!9|Xw}YoX/\u00BFxV\u008E\x1E\u00C1\x0ER]\u008D\u00EBJ\u00CFK\u009Cx\u0083\u0095\u008D\u00BAs\u00BB\u00F8\u00FCf\u00FF>\u00FE~\u008E\u00CAJ2\x19\u00896v\u00E2y\u00A8\u00D2\u00D8\u00A8m\u00AB\u00E4\u00D8+\u00BC\u00FD\u00B6~{\x1Fyy\u00F2\u0087\u00D7t\u00C55\u00E4\u00FB\u00E5T?ss\u00D4\u00D5q\u00E1\u0082\u00AEi\u00C7\u00B6\u00E4\u00D7/\u00EA\u00D6-(\u0092\u009Cef\u009A\u00BE>\u00C2a\x0309\u00A9MM\u00DE\x03\x0F26\u00C1\u00C4\u0084~\u00E3\u009B\u00BAv-\x19\u0097h\u0094\u00E6Vj\u00EA\u00F4\u00BB\u00F7\u00D2\u00F8\t\u00FD\u00CCM,[FW\x175uz\u00F0Q\u00CE\u00FFCo\u00ED\u00F6\u00E2q\u00BD\u0094\u00C8\u00FA\u00A5\x0F \x18\u0094\u00E1a={\x16+\u008FhT7o6{v\u00D3\u00DFC\u00C3zn\u008F\x11\u00CE\u0097\u00D3\u00A7\x19\u00FD k\u00ACLOc\u0081e\u0099\u0097_\u00F0:7p\u00FE\u00BC\u00FC\u00FE\x04\u00D7]\u0087\u00E3\u00F8\x00\x02\x01\u0092I\u00F3\u00C4\u00E3\u00DE\u00F3\u00CF\u00B3|\u00B9\f\fh<.\u00B6Mi)\u00AEK(\u00A4\u00C5E\u00E2\u00F3\x11\n\u00E1\u00B3\u00B4\u00BE^z\u008E\u00CB\u00A1\u009Fj LM\x1DW\u00AE\x10\n\u00E189\u00EDgfXQ\u00AF\u00F1\u00B8\f\x0E\u00C9s\u00CFJ\u00FF\x19\u00ED\u00EE\u00D6\u00E6\x16\x19\x1Ef*!\x07\x1E\u00A5\u00A9\u0089\u0092%\f\r\u00C9\u00D4\x14\u00B3\u00B3r\u00F01\\\u0097P\u0084\u00CA\u00AB\x19\x19\u0091\u00C1A\n\n\x00\u00896vb\f\u00A9\x14\u00F9\u00F9$\u0093d\\<\u00C5\x18\"\x11\u00E6\u00E7\u00B3f\u0082\u00E3\x10\x0E37\u0087m\u0093N\x13\f.\u00EE\u008Bd\x12\u00CB\u00A2\u00A0\u00E0?\u00F4\u00F2<\u00FC~\u00E6\u00E7\u00B1m\u0082\u00C1\u00C5\u00CB\u00A9\u00D4\u00A2OX\x16~?\u00AEK \u0080\u00C8\u00E2\x06\u00CA\u00F6\u00C8\"\u00D9\u00FC\u00BFv\u009A\u00DF\u00FFq\u0091/\u0087[\u00D6\u00E2\u00C7\u00F8wd\u0091le6\u00CFq\u00FD\x0B\u00D3yW\u00F1\u00A0\u00A1}\u00E9\x00\x00\x00\x00IEND\u00AEB`\u0082";


// Interface
{
    function myScript(thisObj) {
        function myScript_buildUI(thisObj) {
            var myPanel = (thisObj instanceof Panel) ? thisObj : new Window("palette", "Dockable Script", undefined, { resizeable: false });
            myPanel.minimumSize = [500, 500];
            myPanel.preferredSize = [500, 500];

            var groupOne = myPanel.add('group');
            groupOne.orientation = 'column';
            groupOne.padding = 0;
            groupOne.margin = 0;
            groupOne.alignChildren = ['left', 'top'];
            groupOne.minimumSize = [500, 500];

            var helpersText = groupOne.add('statictext', undefined, 'Helpers');
            var horGr1 = groupOne.add('group');
            horGr1.orientation = 'row';

            var easeButton = horGr1.add('iconbutton', undefined, ScriptUI.newImage(imgEase), text = 'some');
            easeButton.onClick = function () { easeKeyframeCT(); };

            var roundMaskButton = horGr1.add('iconbutton', undefined, ScriptUI.newImage(imgRoundRect), text = 'some');
            roundMaskButton.onClick = function () { addRoundedMask(); };

            var sep1 = groupOne.add('panel');
            sep1.alignment = 'fill';

            var wipesText = groupOne.add('staticText', undefined, 'Wipes');
            var horGrWipes = groupOne.add('group');
            horGrWipes.orientation = 'row';

            var openWipeButton = horGrWipes.add('iconbutton', undefined, ScriptUI.newImage(imgOpenWipe));
            openWipeButton.onClick = function () { applyWipePreset('open'); };

            var closeWipeButton = horGrWipes.add('iconbutton', undefined, ScriptUI.newImage(imgCloseWipe));
            closeWipeButton.onClick = function () { applyWipePreset('close'); };

            // trim paths
            var horGrTrims = groupOne.add('group');
            horGrTrims.orientation = 'row';

            var trimOpen = horGrTrims.add('button', undefined, 'trimOpen');
            trimOpen.onClick = function () { applyTrimPaths('open'); };

            var trimClose = horGrTrims.add('button', undefined, 'trimClose');
            trimClose.onClick = function () { applyTrimPaths('close'); };



            var sep2 = groupOne.add('panel');
            sep2.alignment = 'fill';

            var animationText = groupOne.add('statictext', undefined, 'Animations');
            var aniGroup = groupOne.add('group');
            aniGroup.orientation = 'row';

            var scrollButton = aniGroup.add('iconbutton', undefined, ScriptUI.newImage(imgScroll));
            scrollButton.onClick = function () { applyScrollPreset(); };

            var zoomButton = aniGroup.add('iconbutton', undefined, ScriptUI.newImage(imgZoom));
            zoomButton.onClick = function () { fitImageToComp(); };


            var sep3 = groupOne.add('panel');
            sep3.alignment = 'fill';

            var bbText = groupOne.add('statictext', undefined, 'BlueBox');
            var bbGroup = groupOne.add('group');
            bbGroup.orientation = 'row';

            var createBBButton = bbGroup.add('iconbutton', undefined, ScriptUI.newImage(imgBB));
            createBBButton.onClick = function () { createBlueBox(); }

            var retimeButton = bbGroup.add('iconbutton', undefined, ScriptUI.newImage(imgRetime));
            retimeButton.onClick = function () { retimeBlueBox(); };

            var sep4 = groupOne.add('panel');
            sep4.alignment = 'fill';

            var compText = groupOne.add('statictext', undefined, 'Composition');
            var compGroup = groupOne.add('group');
            compGroup.orientation = 'row';

            var slideInButton = compGroup.add('iconbutton', undefined, ScriptUI.newImage(imgSlideIn));
            slideInButton.onClick = function () { slideInComp(); };

            // var sep5 = groupOne.add('panel');
            // sep5.alignment = 'fill';

            // var exportText = groupOne.add('statictext', undefined, 'Export');
            // var exportGroup = groupOne.add('group');
            // exportGroup.orientation = 'row';

            // var ameButton = exportGroup.add('iconbutton', undefined, ScriptUI.newImage(imgAME));
            // ameButton.onClick = function () { exportComp(true); };

            // var exportButton = exportGroup.add('iconbutton', undefined, ScriptUI.newImage(imgExp));
            // exportButton.onClick = function () { exportComp(false, false); };

            // var exportAlphaButton = exportGroup.add('iconbutton', undefined, ScriptUI.newImage(imgExpAlpha));
            // exportAlphaButton.onClick = function () { exportComp(false, true); };

            var sep6 = groupOne.add('panel');
            sep6.alignment = 'fill';

            var miscText = groupOne.add('staticText', undefined, 'Misc');
            var miscGroup = groupOne.add('group');
            miscGroup.orientation = 'row';

            var uberscriptButton = miscGroup.add('iconbutton', undefined, ScriptUI.newImage(imgUberscript));
            uberscriptButton.onClick = function () {
                $.evalFile(pathToUberScript);
            }

            var aeTemplateButton = miscGroup.add('iconbutton', undefined, ScriptUI.newImage(imgAeTemplate));
            aeTemplateButton.onClick = function () {
                var aeFile = new File(pathToAeTemplate);
                aeFile.execute();
            }



            myPanel.layout.layout(true);
            myPanel.onres
            return myPanel;
        }

        var myScriptPal = myScript_buildUI(thisObj);
        if (myScriptPal != null && myScriptPal instanceof Window) {
            myScriptPal.center();
            myScriptPal.show();
        }
    }

    if (!testing) {
        myScript(this);
    }
}




// Functions

function checkActiveComp() {
    if (!app.project.activeItem || !(app.project.activeItem instanceof CompItem)) {
        alert("Open a composition.")
        return false;
    }
    return true;
}


function checkLayerSelected() {
    if (!checkActiveComp()) { return false; }
    if (app.project.activeItem.selectedLayers.length < 1) {
        alert("Select a layer.")
        return false;
    }
    return true
}


function easeKeyframeCT() {
    if (!this.checkLayerSelected()) { return; }

    var selectedLayers = app.project.activeItem.selectedLayers;
    var layerCount = selectedLayers.length;
    if (!layerCount) {
        alert('Select a layer and keyframes.');
        return
    }

    var easeIn = new KeyframeEase(0, 100);
    var easeOut = new KeyframeEase(0, 33);

    function setEase(property) {
        if (property.propertyValueType == PropertyValueType.TwoD) {
            easeInArray = [easeIn, easeIn]
            easeOutArray = [easeOut, easeOut]
        } else if (property.propertyValueType == PropertyValueType.ThreeD) {
            easeInArray = [easeIn, easeIn, easeIn]
            easeOutArray = [easeOut, easeOut, easeOut]
        } else {
            easeInArray = [easeIn]
            easeOutArray = [easeOut]
        }

        for (var i = 0; i < property.selectedKeys.length; i++) {
            property.setTemporalEaseAtKey(property.selectedKeys[i], easeInArray, easeOutArray)
        }
    }

    function digToKeysAndEase(property) {
        if (property instanceof Property && property.canVaryOverTime && property.numKeys > 0) {
            setEase(property)
            return
        }

        for (var i = 1; i <= property.numProperties; i++) {
            digToKeysAndEase(property.property(i))
        }
    }

    for (var i = 0; i < layerCount; i++) {
        var currentLayer = selectedLayers[i];
        var selectedProperties = currentLayer.selectedProperties;
        if (!selectedProperties.length) {
            continue
        }

        for (var j = 0; j < selectedProperties.length; j++) {
            var currentProperty = selectedProperties[j]
            digToKeysAndEase(currentProperty)
        }
    }
}


function applyWipePreset(type) {
    if (!checkLayerSelected()) { return; }
    layers = app.project.activeItem.selectedLayers;
    var wipeDuration = 1.3;

    for (var i = 0; i < layers.length; i++) {
        var playheadTime = app.project.activeItem.time;
        wipeTargetLayer = layers[i];
        var wiperEffect = wipeTargetLayer.property("ADBE Effect Parade").addProperty("ADBE Linear Wipe");

        if (type == "open") {
            wiperEffect.name = "Linear Wipe Open";
            wiperEffect.property("ADBE Linear Wipe-0001").setValueAtTime(playheadTime, 100);
            wiperEffect.property("ADBE Linear Wipe-0001").setValueAtTime(playheadTime + wipeDuration, 0);
            wiperEffect.property("ADBE Linear Wipe-0002").setValue(0);
        } else if (type == "close") {
            wiperEffect.name = "Linear Wipe Close";
            wiperEffect.property("ADBE Linear Wipe-0001").setValueAtTime(playheadTime, 0);
            wiperEffect.property("ADBE Linear Wipe-0001").setValueAtTime(playheadTime + wipeDuration, 100);
            wiperEffect.property("ADBE Linear Wipe-0002").setValue(180);
        }

        var easeIn = new KeyframeEase(0, 100);
        var easeOut = new KeyframeEase(0, 33);
        wiperEffect.property("ADBE Linear Wipe-0001").setTemporalEaseAtKey(1, [easeOut]);
        wiperEffect.property("ADBE Linear Wipe-0001").setTemporalEaseAtKey(2, [easeIn]);
    }
}


function slideInComp() {
    if (!checkActiveComp()) { return; }
    var slideSecs = 1;
    oldRenderComp = app.project.activeItem;
    newRenderComp = app.project.items.addComp(oldRenderComp.name + "-slideIn", oldRenderComp.width, oldRenderComp.height, 1, oldRenderComp.duration + slideSecs, oldRenderComp.frameRate);
    oldCompLayer = newRenderComp.layers.add(oldRenderComp);

    oldCompLayer.position.setValueAtTime(0, [oldRenderComp.width / 2, oldRenderComp.height + oldRenderComp.height / 2])
    oldCompLayer.position.setValueAtTime(slideSecs, [oldRenderComp.width / 2, oldRenderComp.height / 2])
    var easeIn = new KeyframeEase(0, 100);
    var easeOut = new KeyframeEase(0, 33);
    oldCompLayer.position.setTemporalEaseAtKey(1, [easeIn], [easeOut])
    oldCompLayer.position.setTemporalEaseAtKey(2, [easeIn], [easeOut])

    newRenderComp.motionBlur = true;
    oldCompLayer.motionBlur = true;
    oldCompLayer.timeRemapEnabled = true;
    oldCompLayer.property("ADBE Time Remapping").expressionEnabled = true;
    oldCompLayer.property("ADBE Time Remapping").expression = "if (time < " + slideSecs + ") {0} else {time - " + slideSecs + "}";

    newRenderComp.openInViewer();
}


function applyScrollPreset() {
    if (!checkLayerSelected()) { return; }
    scrollTargetLayers = app.project.activeItem.selectedLayers;

    var easeIn = new KeyframeEase(0, 100);
    var easeOut = new KeyframeEase(0, 33);
    var compWidth = app.project.activeItem.width;
    var compHeight = app.project.activeItem.height;

    for (var i = 0; i < scrollTargetLayers.length; i++) {
        scrollTargetLayer = scrollTargetLayers[i];
        scrollTargetLayer.selected = true;
        var scrollSpeedSlider = scrollTargetLayer.property("ADBE Effect Parade").addProperty('ADBE Slider Control');
        scrollSpeedSlider.name = 'Scroll Speed';
        scrollSpeedSlider.slider.setValue(20);

        var incomingSlider = scrollTargetLayer.property("ADBE Effect Parade").addProperty('ADBE Slider Control');
        incomingSlider.name = 'Incoming';
        incomingSlider.slider.setValueAtTime(0, compHeight);
        incomingSlider.slider.setTemporalEaseAtKey(1, [easeIn]);
        incomingSlider.slider.setValueAtTime(1.3, 0);
        incomingSlider.slider.setTemporalEaseAtKey(2, [easeOut]);

        var slideInScrollCheckbox = scrollTargetLayer.property("ADBE Effect Parade").addProperty('ADBE Checkbox Control');
        slideInScrollCheckbox.name = 'SlideIn';
        slideInScrollCheckbox.checkbox.setValue(false);

        var fitToBackgroundScrollCheckbox = scrollTargetLayer.property("ADBE Effect Parade").addProperty('ADBE Checkbox Control');
        fitToBackgroundScrollCheckbox.name = 'FitToBackground';
        fitToBackgroundScrollCheckbox.checkbox.setValue(false);

        var fitToSocialPostScrollCheckbox = scrollTargetLayer.property("ADBE Effect Parade").addProperty('ADBE Checkbox Control');
        fitToSocialPostScrollCheckbox.name = 'FitToSocialPost';
        fitToSocialPostScrollCheckbox.checkbox.setValue(false);

        var zoomInScrollCheckbox = scrollTargetLayer.property("ADBE Effect Parade").addProperty('ADBE Checkbox Control');
        zoomInScrollCheckbox.name = 'ZoomIn';
        zoomInScrollCheckbox.checkbox.setValue(false);

        var zoomInAmountScrollSlider = scrollTargetLayer.property("ADBE Effect Parade").addProperty('ADBE Slider Control');
        zoomInAmountScrollSlider.name = 'ZoomIn Amount';
        zoomInAmountScrollSlider.slider.setValue(10);

        scrollTargetLayer.transform.scale.expressionEnabled = true;
        scrollTargetLayer.transform.scale.expression = 'zoomIn = effect("ZoomIn")("Checkbox").value;\nzoomInAmount = effect("ZoomIn Amount")("Slider").value;\nfitToWidth = effect("FitToBackground")("Checkbox").value;\nincoming = effect("Incoming")("Slider").value;\nfitToPost = effect("FitToSocialPost")("Checkbox").value;\nif ( fitToWidth == true ) {\n	proportion =' + compWidth + '*100/thisLayer.width;\n	x = proportion + value[0] - 100;\n	y = proportion + value[1] - 100;\n} else if (fitToPost == true) {\n	proportion = ' + compWidth * .52 + '*100/thisLayer.width;\n	x = proportion + value[0] - 100;\n	y = proportion + value[1] - 100;\n} else {\n	x = value[0];\n	y = value[1];\n}\nif (zoomIn == true) { \n	liner = linear( incoming, 0, thisComp.height, zoomInAmount, 0 );\n	[ x + liner, y + liner]\n	//easeOut(time,inPoint,inPoint + 1.5,[ x, y ],[ x+ zoomInAmount, y+ zoomInAmount ]) \n} else {\n	[ x, y ] \n}';

        scrollTargetLayer.position.dimensionsSeparated = true;
        scrollTargetLayer.transform.property("ADBE Position_1").setValue(compHeight / 2);
        scrollTargetLayer.transform.property("ADBE Position_1").expressionEnabled = true;
        scrollTargetLayer.transform.property("ADBE Position_1").expression = 'yEase = effect("Incoming")("Slider").value;\nscrollSlider = effect("Scroll Speed")("Slider").value;\noffsetTime = time - thisLayer.startTime;\noffsetTimeAfterZoom = time - thisLayer.effect("Incoming")("Slider").key(2).time;\nzoomIn = effect("ZoomIn")("Checkbox").value;\nfitToSocial = effect("FitToSocialPost")("Checkbox").value;\nif (fitToSocial == true){socialOffset = ' + compHeight * 0.125 + '} else {socialOffset = 0}\nif (effect("SlideIn")("Checkbox") == true) {\nvar resultY = yEase - offsetTimeAfterZoom*scrollSlider + transform.yPosition-thisComp.height/2;\n} else {\nif ( zoomIn == true ) { \nif (time < thisLayer.effect("Incoming")("Slider").key(2).time) {\nvar resultY = transform.yPosition - thisComp.height/2 + socialOffset;\n} else {\nvar resultY = -offsetTimeAfterZoom*scrollSlider + transform.yPosition - thisComp.height/2 + socialOffset;\n}\n} else {\nvar resultY = -offsetTime*scrollSlider + transform.yPosition - thisComp.height/2 + socialOffset;\n}\n}\nif (fitToSocial || effect("SlideIn")("Checkbox") == true) {resultY;} else {\nclampY = thisLayer.height*thisLayer.scale[1]/100 - thisComp.height;\nclamp(resultY,0,-clampY);\n}';
        scrollTargetLayer.transform.property("ADBE Anchor Point").setValue([scrollTargetLayer.width / 2, 0, 0]);
        scrollTargetLayer.transform.property("ADBE Anchor Point").expressionEnabled = true;
        scrollTargetLayer.transform.property("ADBE Anchor Point").expression = '[value[0],0+value[1]]';
        scrollTargetLayer.selected = false;
    }
}


function addRoundedMask() {
    if (!checkLayerSelected) { return; }
    var targetLayers = app.project.activeItem.selectedLayers;
    for (var i = 0; i < targetLayers.length; i++) {
        var targetLayer = targetLayers[i];
        roundCorners = new Shape();
        ratio = 2.6
        roundness = targetLayer.width * ratio / 100;
        roundCorners.vertices = [[roundness, 0], [targetLayer.width - roundness, 0], [targetLayer.width, roundness], [targetLayer.width, targetLayer.height - roundness], [targetLayer.width - roundness, targetLayer.height], [roundness, targetLayer.height], [0, targetLayer.height - roundness], [0, roundness]];
        roundCorners.inTangents = [[-roundness, 0], [0, 0], [0, -roundness], [0, 0], [roundness, 0], [0, 0], [0, roundness]];
        roundCorners.closed = true;
        targetLayer.property('ADBE Mask Parade').addProperty("ADBE Mask Atom");
        targetLayer.property('ADBE Mask Parade').property("ADBE Mask Atom").property("ADBE Mask Shape").setValue(roundCorners);
    }
}



function exportComp(ame, alpha) {
    if (!checkActiveComp()) { return; }

    var queueObject = app.project.renderQueue.items.add(app.project.activeItem);
    var outputModule = queueObject.outputModule(1);

    var alphaMute = 'qt_alpha_mute';
    var alphaSound = 'qt_alpha_sound';
    var alphaAutoSound = 'qt_alpha_autoSound';
    var rgbMute = 'qt_rgb_mute';
    var rgbSound = 'qt_rgb_sound';

    outputModule.applyTemplate(rgbSound);

    try {
        var projectFolder = app.project.file.path;
        var projectName = app.project.file.name;
        var outputName = projectFolder + '/' + projectName.split('.')[0];
        outputModule.file = new File(outputName);
    } catch (e) {
        $.writeln('Project not saved. Can not specify output file path.')
    }

    if (ame) {
        app.project.renderQueue.queueInAME(false);
        queueObject.remove();
    } else if (alpha) {
        outputModule.applyTemplate(alphaAutoSound);
    }
}


function retimeBlueBox() {
    if (!checkLayerSelected()) { return; }
    var selectedLayers = app.project.activeItem.selectedLayers;
    for (var i = 0; i < selectedLayers.length; i++) {
        var bbLayer = selectedLayers[i];
        bbLayer.timeRemapEnabled = true;
        bbLayer.property("ADBE Time Remapping").expressionEnabled = true;
        bbLayer.property("ADBE Time Remapping").expression = 'us = thisLayer;\ninP = us.inPoint;\noutP = us.outPoint;\nduration = outP - inP;\nintro = time - inP;\noutro = outP - inP;\nif (intro < 1.4) {\n    linear(intro, 0, 2, 0, 2);\n} else if (intro < outro - 1) {\n    5;\n} else {\n    linear(intro, outro - 1, outro, 6, 7)\n}';
    }
}


function createBlueBox() {
    z
    if (!checkActiveComp()) { return; }

    var fontRegular = 'RobotoCondensed-Regular';
    var fontBold = 'RobotoCondensed-Bold';
    var compLength = 60;

    function lerp(x, y, a) {
        return x * (1 - a) + y * a;
    }

    function clamp(a, min, max) {
        if (min) {
            var min = min;
        } else {
            var min = 0
        }
        if (max) {
            var max = max;
        } else {
            var max = 1;
        }
        return Math.min(max, Math.max(min, a));
    }

    function invlerp(x, y, a) {
        return clamp((a - x) / (y - x));
    }

    function range(x1, y1, x2, y2, a) {
        return lerp(x2, y2, invlerp(x1, y1, a));
    }

    var mainComp = app.project.activeItem;
    var compWidth = mainComp.width;
    var compHeight = mainComp.height;
    var compFrameRate = mainComp.frameRate;

    var blueBoxComp = app.project.items.addComp("Quote-Box", compWidth, compHeight, 1, 7, compFrameRate);
    var bbLayer = mainComp.layers.add(blueBoxComp);
    bbLayer.selected = true;
    retimeBlueBox();

    var bbFolder = app.project.items.addFolder("Quote-Box-1");
    blueBoxComp.parentFolder = bbFolder;

    // controller Null
    var controllerNull = blueBoxComp.layers.addNull();
    controllerNull.name = "Controller";

    var sliderWipeSpeedEG = controllerNull.property('ADBE Effect Parade').addProperty('ADBE Slider Control');
    sliderWipeSpeedEG.name = "Wipe Speed EG";
    sliderWipeSpeedEG.slider.setValue(70);

    var sliderWipeSpeed = controllerNull.property('ADBE Effect Parade').addProperty('ADBE Slider Control');
    sliderWipeSpeed.name = "WipeSpeed";
    sliderWipeSpeed.slider.expressionEnabled = true;
    sliderWipeSpeed.slider.expression = 'effect("Wipe Speed EG")("Slider")/100';

    var sliderOpenTransition = controllerNull.property('ADBE Effect Parade').addProperty('ADBE Slider Control');
    sliderOpenTransition.name = "OpenTransition";
    sliderOpenTransition.slider.expressionEnabled = true;
    sliderOpenTransition.slider.expression = 'd= effect("WipeSpeed")("Slider");\nease(time,0,0 + d,100,0);';

    var sliderCloseTransition = controllerNull.property('ADBE Effect Parade').addProperty('ADBE Slider Control');
    sliderCloseTransition.name = "CloseTransition";
    sliderCloseTransition.slider.expressionEnabled = true;
    sliderCloseTransition.slider.expression = 'd= effect("WipeSpeed")("Slider");\ncompDuration = thisComp.duration;\nease(time,compDuration - d, compDuration-.05 ,0,100);';

    var sliderPadding = controllerNull.property('ADBE Effect Parade').addProperty('ADBE Slider Control');
    sliderPadding.name = "Padding";
    sliderPadding.slider.setValue(compHeight * 0.037037);

    var sliderYOffset = controllerNull.property('ADBE Effect Parade').addProperty('ADBE Slider Control');
    sliderYOffset.name = "Y Offset";
    sliderYOffset.slider.setValue(0);

    var sliderXSpacing = controllerNull.property('ADBE Effect Parade').addProperty('ADBE Slider Control');
    sliderXSpacing.name = "xSpacing";
    sliderXSpacing.slider.setValue(0);

    var sliderYSpacing = controllerNull.property('ADBE Effect Parade').addProperty('ADBE Slider Control');
    sliderYSpacing.name = "ySpacing";
    sliderYSpacing.slider.setValue(15);

    var sliderBoxOpacity = controllerNull.property('ADBE Effect Parade').addProperty('ADBE Slider Control');
    sliderBoxOpacity.name = "BoxOpacity";
    sliderBoxOpacity.slider.setValue(100);

    var sliderColorStyler = controllerNull.property('ADBE Effect Parade').addProperty('ADBE Slider Control');
    sliderColorStyler.name = "Color Styler";
    sliderColorStyler.slider.setValue(1);
    sliderColorStyler.slider.expressionEnabled = true;
    sliderColorStyler.slider.expression = 'Math.round(effect("Color Styler")(1).value)';

    var checkboxRoundCorners = controllerNull.property('ADBE Effect Parade').addProperty('ADBE Checkbox Control');
    checkboxRoundCorners.name = "Round Corners";
    checkboxRoundCorners.checkbox.setValue(false);

    var checkboxTextTransparencyAnimation = controllerNull.property('ADBE Effect Parade').addProperty('ADBE Checkbox Control');
    checkboxTextTransparencyAnimation.name = "TextTransparencyAnimation";
    checkboxTextTransparencyAnimation.checkbox.setValue(false);

    // blue box layer
    var blueBoxLayer = blueBoxComp.layers.addShape();
    blueBoxLayer.name = "Blue Box";
    blueBoxLayer.transform.property("ADBE Anchor Point").setValue([0, 0]); // continue
    blueBoxLayer.transform.property("ADBE Position").setValue([0, 0]);
    blueBoxLayer.transform.property("ADBE Opacity").expressionEnabled = true;
    blueBoxLayer.transform.property("ADBE Opacity").expression = 'thisComp.layer("Controller").effect("BoxOpacity")("Slider")';

    var rectangleGroup = blueBoxLayer.property('ADBE Root Vectors Group').addProperty("ADBE Vector Group");
    rectangleGroup.name = "Rectangle 1";
    var rectanglePathGroup = blueBoxLayer.property('ADBE Root Vectors Group').property("Rectangle 1").property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Rect");
    rectanglePathGroup.property("ADBE Vector Rect Size").expressionEnabled = true;
    rectanglePathGroup.property("ADBE Vector Rect Size").expression = 't = thisComp.layer("CommentText");\nnameText = thisComp.layer("NameText");\nw = (t.sourceRectAtTime().width > nameText.sourceRectAtTime().width) ? t.sourceRectAtTime().width : nameText.sourceRectAtTime().width;\nif (thisComp.layer("NameText").text.sourceText.length < 1) {\ndivider = 0;\nspacing = 0;\n} else { \ndivider = ' + compHeight * 0.0462 + ';\nspacing = thisComp.layer("Controller").effect("ySpacing")("Slider");\n}\nh = t.sourceRectAtTime().height + nameText.sourceRectAtTime().height + spacing + divider;\n[w,h]';

    var rectangleFillGroup = blueBoxLayer.property('ADBE Root Vectors Group').property("Rectangle 1").property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
    rectangleFillGroup.property("ADBE Vector Fill Color").expressionEnabled = true;
    rectangleFillGroup.property("ADBE Vector Fill Color").expression = 'pool = [14, 202, 227, 0] / 255;\nmidnight = [16, 44, 68, 0] / 255;\nraspberry = [255, 0, 85, 0] / 255;\nheather = [222, 229, 236, 0] / 255;\nplum = [45, 25, 150, 0] / 255;\nwhite = [255, 255, 255, 0] / 255;\ncolor = [pool, midnight, raspberry, heather, plum, white];\ncolorStyler = thisComp.layer("Controller").effect("Color Styler")("Slider").value;\ncolor[colorStyler-1];';
    var offsetPathsGroup = blueBoxLayer.property('ADBE Root Vectors Group').addProperty("ADBE Vector Filter - Offset");
    offsetPathsGroup.property("ADBE Vector Offset Amount").expressionEnabled = true;
    offsetPathsGroup.property("ADBE Vector Offset Amount").expression = 'thisComp.layer("Controller").effect("Padding")("Slider")';
    var roundCornersGroup = blueBoxLayer.property('ADBE Root Vectors Group').addProperty("ADBE Vector Filter - RC");
    roundCornersGroup.property("ADBE Vector RoundCorner Radius").expressionEnabled = true;
    roundCornersGroup.property("ADBE Vector RoundCorner Radius").expression = 'if ( thisComp.layer("Controller").effect("Round Corners")("Checkbox") == true) {100} else {0}';

    blueBoxLayer.property('ADBE Root Vectors Group').property("Rectangle 1").property("ADBE Vector Transform Group").property("ADBE Vector Anchor").expressionEnabled = true;
    blueBoxLayer.property('ADBE Root Vectors Group').property("Rectangle 1").property("ADBE Vector Transform Group").property("ADBE Vector Anchor").expression = 'xSize = content("Rectangle 1").content("Rectangle Path 1").size[0];\nySize = content("Rectangle 1").content("Rectangle Path 1").size[1];\nxDivNeg = xSize/2*-1;\nyDivNeg = ySize/2*-1;\n[xDivNeg, yDivNeg]';
    blueBoxLayer.property('ADBE Root Vectors Group').property("Rectangle 1").property("ADBE Vector Transform Group").property("ADBE Vector Position").expressionEnabled = true;
    blueBoxLayer.property('ADBE Root Vectors Group').property("Rectangle 1").property("ADBE Vector Transform Group").property("ADBE Vector Position").expression = '[ thisComp.layer("CommentText").transform.xPosition,  thisComp.layer("CommentText").transform.yPosition]';
    blueBoxLayer.selected = false;

    // add comment text box
    var commentTextBox = blueBoxComp.layers.addBoxText([compWidth * 0.8489, compHeight]);
    commentTextBox.name = "CommentText";
    var commentTextDocument = commentTextBox.property("ADBE Text Properties").property("ADBE Text Document").value;
    commentTextDocument.resetCharStyle();
    commentTextDocument.font = fontRegular;
    commentTextDocument.fontSize = compHeight * 0.04166;
    commentTextDocument.leading = range(720, 2160, 24.7, 104.8, compHeight);
    commentTextDocument.tracking = 0;
    commentTextDocument.fillColor = [16 / 255, 44 / 255, 68 / 255];
    commentTextDocument.applyFill = true;
    commentTextDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
    commentTextBox.property("ADBE Text Properties").property("ADBE Text Document").setValue(commentTextDocument);
    commentTextBox.text.sourceText.setValue('Quote text goes here. Quote text goes here. Quote text goes here. Quote text goes here.');

    var commentTextProperty = commentTextBox.property("ADBE Text Properties");
    var commentTextAnimator1 = commentTextProperty.property("ADBE Text Animators").addProperty("ADBE Text Animator");
    var animator1selector = commentTextAnimator1.property("ADBE Text Selectors").addProperty("ADBE Text Selector");
    var animator1effect = commentTextAnimator1.property("ADBE Text Animator Properties").addProperty("ADBE Text Line Spacing");
    animator1effect.expressionEnabled = true;
    animator1effect.expression = 'xSpacer = thisComp.layer("Controller").effect("xSpacing")("Slider");\nySpacer = thisComp.layer("Controller").effect("ySpacing")("Slider");\n[xSpacer, ySpacer]';
    var commentTextAnimator2 = commentTextProperty.property("ADBE Text Animators").addProperty("ADBE Text Animator");
    var animator2selector = commentTextAnimator2.property("ADBE Text Selectors").addProperty("ADBE Text Selector");
    animator2selector.offset.expressionEnabled = true;
    animator2selector.offset.expression = 'd= thisComp.layer("Controller").effect("WipeSpeed")("Slider");\nease(time,0+ d/8,0 + d*2,-100,100);';
    var animator2effect = commentTextAnimator2.property("ADBE Text Animator Properties").addProperty("ADBE Text Opacity");
    animator2effect.expressionEnabled = true;
    animator2effect.expression = 'if (thisComp.layer("Controller").effect("TextTransparencyAnimation")("Checkbox").value == true) {0} else {100}';
    animator2selector.property("ADBE Text Range Advanced").property("ADBE Text Range Shape").setValue(2);

    var commentFillEffect = commentTextBox.property('ADBE Effect Parade').addProperty("ADBE Fill");
    commentFillEffect.color.expressionEnabled = true;
    commentFillEffect.color.expression = 'thisComp.layer("NameText").effect("Fill")("Color")';

    commentTextBox.position.dimensionsSeparated = true;
    commentTextBox.transform.property("ADBE Position_0").expressionEnabled = true;
    commentTextBox.transform.property("ADBE Position_0").expression = 'comparator = (thisComp.layer("CommentText").sourceRectAtTime().width > thisComp.layer("NameText").sourceRectAtTime().width) ? thisComp.layer("CommentText").sourceRectAtTime().width : thisComp.layer("NameText").sourceRectAtTime().width;\n(' + compWidth + '-comparator)/2;';
    commentTextBox.transform.property("ADBE Position_1").expressionEnabled = true;
    commentTextBox.transform.property("ADBE Position_1").expression = 'h = thisLayer.sourceRectAtTime().height + thisComp.layer("NameText").sourceRectAtTime().height + ' + compHeight * 0.0388 + ';\nd = thisComp.height-h;\noffset = thisComp.layer("Controller").effect("Y Offset")("Slider");\nd/2+offset';
    commentTextBox.transform.property("ADBE Anchor Point").setValue([-compWidth * 0.8489 / 2, -compHeight / 2]);

    //name text box
    var nameTextBox = commentTextBox.duplicate();
    nameTextBox.name = "NameText";
    nameTextBox.moveToBeginning();
    var nameTextDocument = nameTextBox.property("ADBE Text Properties").property("ADBE Text Document").value;
    nameTextDocument.resetCharStyle();
    nameTextDocument.font = fontBold;
    nameTextDocument.fontSize = compHeight * 0.04166;
    nameTextDocument.leading = range(720, 2160, 24.7, 104.8, compHeight);
    nameTextDocument.tracking = 0;
    nameTextDocument.fillColor = [16 / 255, 44 / 255, 68 / 255];
    nameTextDocument.applyFill = true;
    nameTextDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
    nameTextBox.property("ADBE Text Properties").property("ADBE Text Document").setValue(nameTextDocument);
    nameTextBox.text.sourceText.setValue("Quote Author, and his description");

    nameTextBox.property('ADBE Effect Parade').property("ADBE Fill").color.expression = 'pool = [14, 202, 227, 0] / 255;\nmidnight = [16, 44, 68, 0] / 255;\nraspberry = [255, 0, 85, 0] / 255;\nheather = [222, 229, 236, 0] / 255;\nplum = [45, 25, 150, 0] / 255;\nwhite = [255, 255, 255, 0] / 255;\ncolor = [midnight, heather, white, midnight, white, plum];\ncolorStyler = thisComp.layer("Controller").effect("Color Styler")("Slider").value;\ncolor[colorStyler-1];';
    nameTextBox.transform.property("ADBE Position_0").expression = 'thisComp.layer("CommentText").transform.xPosition';
    nameTextBox.transform.property("ADBE Position_1").expression = 'commentHeight = thisComp.layer("CommentText").sourceRectAtTime().height;\nthisComp.layer("CommentText").transform.yPosition + commentHeight + ' + compHeight * 0.04629 + ' + thisComp.layer("Controller").effect("ySpacing")("Slider")';

    // matte box 1
    var matteBox = blueBoxComp.layers.addSolid([0, 0, 0], "Matte Box", compWidth, compHeight, 1, compLength);
    matteBox.enabled = true;
    matteBox.blendingMode = BlendingMode.STENCIL_ALPHA;
    matteBox.selected = true;
    var openWipe = matteBox.property('ADBE Effect Parade').addProperty("ADBE Linear Wipe");
    openWipe.name = "Open Wipe";
    openWipe.property("ADBE Linear Wipe-0002").setValue(0);
    openWipe.property("ADBE Linear Wipe-0001").expressionEnabled = true;
    openWipe.property("ADBE Linear Wipe-0001").expression = 'thisComp.layer("Controller").effect("OpenTransition")("Slider")';
    var closeWipe = matteBox.property('ADBE Effect Parade').addProperty("ADBE Linear Wipe");
    closeWipe.name = "Close Wipe";
    closeWipe.property("ADBE Linear Wipe-0002").setValue(180);
    closeWipe.property("ADBE Linear Wipe-0001").expressionEnabled = true;
    closeWipe.property("ADBE Linear Wipe-0001").expression = 'thisComp.layer("Controller").effect("CloseTransition")("Slider")';
    matteBox.transform.property("ADBE Anchor Point").setValue([0, 0]);
    matteBox.transform.property("ADBE Position").expressionEnabled = true;
    matteBox.transform.property("ADBE Position").expression = 'x = thisComp.layer("Blue Box").content("Rectangle 1").transform.position[0]-thisComp.layer("Blue Box").content("Offset Paths 1").amount;\ny = thisComp.layer("Blue Box").content("Rectangle 1").transform.position[1]-thisComp.layer("Blue Box").content("Offset Paths 1").amount;\n[0, y]';
    matteBox.transform.property("ADBE Scale").expressionEnabled = true;
    matteBox.transform.property("ADBE Scale").expression = 't = thisComp.layer("CommentText");\nw = t.sourceRectAtTime().width;\nh = t.sourceRectAtTime().height;\ntopPoint = thisComp.layer("Blue Box").content("Rectangle 1").transform.position[0]-thisComp.layer("Blue Box").content("Offset Paths 1").amount;\nbottomPoint = topPoint+thisComp.layer("Blue Box").content("Offset Paths 1").amount*2+ thisComp.layer("Blue Box").content("Rectangle 1").content("Rectangle Path 1").size[1];\nl = bottomPoint-topPoint;\nxale = l*100/thisComp.height;\n[100, xale]';
    matteBox.selected = false;
    blueBoxComp.openInViewer();
    try {
        app.executeCommand(app.findMenuCommandId("Close"));
    } catch (e) {
        alert("some error happened. don't pay attention");
        return blueBoxComp;
    }
    return blueBoxComp;
}


function fitImageToComp() {
    if (!checkLayerSelected) { return; }

    var scaleBumper = true;
    var activeComp = app.project.activeItem;
    var targetLayers = activeComp.selectedLayers;
    var audioLayerReference = undefined;

    for (var i = 0; i < targetLayers.length; i++) {
        var targetLayerFit = targetLayers[i];
        var layerOrientation = ((targetLayerFit.width / targetLayerFit.height) > (activeComp.width / activeComp.height)) ? "horizontal" : "vertical";
        if (layerOrientation == "horizontal") {
            var startPercentage = (scaleBumper == true) ? 60 : 50;
            var endPercentage = (scaleBumper == true) ? 70 : 60;
            var targetStartScale = activeComp.width * startPercentage / targetLayerFit.width;
            var targetEndScale = activeComp.width * endPercentage / targetLayerFit.width;
        } else {
            var startPercentage = (scaleBumper == true) ? 60 : 50;
            var endPercentage = (scaleBumper == true) ? 70 : 60;
            var targetStartScale = activeComp.height * startPercentage / targetLayerFit.height;
            var targetEndScale = activeComp.height * endPercentage / targetLayerFit.height;
        }

        // slow zoom in
        // var zoomDuration = (audioLayerReference != undefined) ? app.project.item(1).layer(findLayerIdByName(audioLayerReference)).outPoint + defaultCompTail : defaultCompDuration;
        var zoom = true;
        if (zoom) {
            var easeIn = new KeyframeEase(0, 100);
            targetLayerFit.scale.setValueAtTime(targetLayerFit.inPoint, [targetStartScale, targetStartScale, targetStartScale]);
            targetLayerFit.scale.setValueAtTime(targetLayerFit.outPoint, [targetEndScale, targetEndScale, targetEndScale]);
            targetLayerFit.scale.setTemporalEaseAtKey(2, [easeIn, easeIn, easeIn]);
        } else {
            targetLayerFit.scale.setValue([targetStartScale, targetStartScale, targetStartScale]);
        }
    }
}


function createTemplate() {
    x = 1;
    return
}


function applyTrimPaths(type) {
    if (!checkLayerSelected()) { return; }
    layers = app.project.activeItem.selectedLayers;
    var wipeDuration = 1.3;

    for (var i = 0; i < layers.length; i++) {
        var playheadTime = app.project.activeItem.time;
        wipeTargetLayer = layers[i];
        var trimPaths = wipeTargetLayer.property("ADBE Root Vectors Group").addProperty("ADBE Vector Filter - Trim");

        var easeIn = new KeyframeEase(0, 100);
        var easeOut = new KeyframeEase(0, 33);

        if (type == "open") {
            trimPaths.name = "trimPathsOpen";
            var targetProp = trimPaths.property('End');
            targetProp.setValueAtTime(playheadTime,0)
            targetProp.setValueAtTime(playheadTime+wipeDuration,100)
        } else if (type == "close") {
            trimPaths.name = "trimPathsClose";
            var targetProp = trimPaths.property('Start');
            targetProp.setValueAtTime(playheadTime,0)
            targetProp.setValueAtTime(playheadTime+wipeDuration,100)
        }

        targetProp.setTemporalEaseAtKey(1, [easeOut]);
        targetProp.setTemporalEaseAtKey(2, [easeIn]);
    }
}